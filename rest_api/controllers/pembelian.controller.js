const db = require("../models");
const Pembelian = db.pembelian;
const date = new Date();
const Op = db.Sequelize.Op;
const fn = db.Sequelize.fn;
const col = db.Sequelize.col;

const getPagination = (page, size) => {
  const limit = size ? +size : 5;
  const offset = page ? page * limit : 0;
  return { limit, offset };
};

const getPagingDataGrouped = (data, page, limit) => {
  const { count: totalItems, rows: items } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems.length / limit);
  return {
    items,
    totalPages,
    currentPage,
  };
};

const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: items } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);
  return {
    totalItems,
    items,
    totalPages,
    currentPage,
  };
};

exports.findAllGroupByCode = (req, res) => {
  const { page, size, kode } = req.query;
  let condition = kode ? { kode: { [Op.like]: `%${kode}%` } } : null;
  const { limit, offset } = getPagination(page, size);
  try {
    Pembelian.findAndCountAll({
      where: condition,
      group: ["kode"],
      attributes: ["kode", [fn("COUNT", col("kode")), "count"]],
      limit,
      offset,
    })
      .then((data) => {
        const response = getPagingDataGrouped(data, page, limit);
        res.send(response);
        console.log(response);
      })
      .catch((err) => {
        res.status(500).send({
          message: err,
          data: null,
        });
      });
  } catch (error) {
    res.status(400).send({
      msg: "unknown error",
      data: null,
    });
  }
};

exports.findById = (req, res) => {
  const id = req.params.id;
  try {
    Pembelian.findByPk(id)
      .then((data) => {
        if (data === null) {
          res.status(404).send({
            msg: `id ${id} not found!`,
            data: data,
          });
        } else {
          res.send({
            msg: "Successed",
            data: data,
          });
        }
      })
      .catch((err) => {
        res.send({
          msg: err.errors[0].message,
          data: null,
        });
      });
  } catch (error) {
    res.status(400).send({
      msg: "unknown error",
      data: null,
    });
  }
};

exports.findByCode = (req, res) => {
  const code = req.params.kode;
  const { page, size } = req.query;
  const { limit, offset } = getPagination(page, size);

  try {
    Pembelian.findAndCountAll({
      where: { kode: req.params.code },
      include: ["pemasok", "produk"],
      limit,
      offset,
    })
      .then((data) => {
        if (data === null) {
          res.status(404).send({
            msg: `code ${code} not found!`,
            data: data,
          });
        } else {
          const response = getPagingData(data, page, limit);
          res.send(response);
        }
      })
      .catch((err) => {
        res.send({
          msg: err.errors[0].message,
          data: null,
        });
      });
  } catch (error) {
    res.status(400).send({
      msg: "unknown error",
      data: null,
    });
  }
};

exports.addOne = (req, res) => {
  const request = {
    kode:
      "PB" +
      req.body.pemasok_id +
      date.getFullYear() +
      (date.getMonth() + 1) +
      date.getDate() +
      date.getHours() +
      date.getMinutes(),
    harga: req.body.harga,
    banyak: req.body.banyak,
    note: req.body.note,
    produk_id: req.body.produk_id,
    pemasok_id: req.body.pemasok_id,
  };
  try {
    Pembelian.create(request)
      .then((data) => {
        res.send({
          msg: "successed",
          data: data,
        });
      })
      .catch((err) => {
        res.send({
          msg: err.errors[0].message,
          data: null,
        });
      });
  } catch (error) {
    res.status(400).send({
      msg: "unknown error",
      data: null,
    });
  }
};

exports.deleteById = (req, res) => {
  const id = req.params.id;
  try {
    Pembelian.destroy({ where: { id: id } })
      .then((data) => {
        if (data == 1) {
          res.send({
            msg: "Successed",
          });
        } else {
          res.status(404).send({
            msg: `id ${id} not found!`,
          });
        }
      })
      .catch((err) => {
        res.send({
          message: err.errors[0].message,
          data: null,
        });
      });
  } catch (error) {
    res.status(400).send({
      msg: "unknown error",
      data: null,
    });
  }
};

exports.deleteByCode = (req, res) => {
  const code = req.params.code;
  try {
    Pembelian.destroy({ where: { kode: code } })
      .then((data) => {
        if (data == 0) {
          res.status(404).send({
            msg: `code ${code} not found!`,
          });
        } else {
          res.send({
            msg: "Successed",
          });
        }
      })
      .catch((err) => {
        res.send({
          message: err.errors[0].message,
          data: null,
        });
      });
  } catch (error) {
    res.status(400).send({
      msg: "unknown error",
      data: null,
    });
  }
};
