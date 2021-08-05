const db = require("../models");
const Produk = db.produk;

const getPagination = (page, size) => {
  const limit = size ? +size : 5;
  const offset = page ? page * limit : 0;
  return { limit, offset };
};

const getPagingData = (data, page, limit) => {
  const { count: totals, rows: datas } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totals / limit);
  return { totals, datas, totalPages, currentPage };
};

exports.findAll = (req, res) => {
  const { page, size, nama } = req.query;
  let condition = nama ? { nama: { [Op.like]: `%${nama}%` } } : null;
  const { limit, offset } = getPagination(page, size);
  try {
    Produk.findAndCountAll({ where: condition, limit, offset })
      .then((data) => {
        const response = getPagingData(data, page, limit);
        res.send(response);
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

exports.findById = (req, res) => {
  const id = req.params.id;
  try {
    Produk.findByPk(id)
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

exports.addOne = (req, res) => {
  try {
    // TODO : image upload add
    const request = {
      kode: req.body.kode,
      nama: req.body.nama,
      stok: 0,
    };
    Produk.create(request)
      .then((data) => {
        res.send({
          msg: "Successed",
          data: data,
        });
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

exports.updateById = (req, res) => {
  const id = req.params.id;
  try {
    // TODO : image upload update
    Produk.update(req.body, { where: { id: id } })
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

exports.deleteById = (req, res) => {
  const id = req.params.id;
  try {
    // TODO : image upload delete
    Produk.destroy({ where: { id: id } })
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
