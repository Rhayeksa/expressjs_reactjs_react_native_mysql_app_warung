const { default: axios } = require("axios");
const db = require("../models");
const Pemasok = db.pemasok;
const Op = db.Sequelize.Op;

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
    Pemasok.findAndCountAll({ where: condition, limit, offset })
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
    Pemasok.findByPk(id)
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
  console.log(req.files);
  try {
    // TODO : image upload add
    axios
      .post("https://api.imgur.com/3/upload", {
        image: "/home/rhayeksa/Downloads/Telegram Desktop/github.png",
      })
      .then((data) => {
        res.send({
          msg: "proses bang",
          data: data,
        });
      })
      .catch((err) => {
        res.send({
          msg: err,
        });
      });
    // Pemasok.create(req.body)
    //   .then((data) => {
    //     res.send({
    //       msg: "Successed",
    //       data: data,
    //     });
    //   })
    //   .catch((err) => {
    //     res.send({
    //       message: err.errors[0].message,
    //       data: null,
    //     });
    //   });
  } catch (error) {
    res.status(500).send({
      msg: "unknown error",
      data: null,
    });
  }
};

exports.updateById = (req, res) => {
  const id = req.params.id;
  try {
    // TODO : image upload update
    Pemasok.update(req.body, { where: { id: id } })
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
    Pemasok.destroy({ where: { id: id } })
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
