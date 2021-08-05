const dbConfig = require("../configs/db.config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  dbConfig.local.DB,
  dbConfig.local.USER,
  dbConfig.local.PASSWORD,
  {
    host: dbConfig.local.HOST,
    dialect: dbConfig.local.dialect,
    operatorsAliases: false,
    pool: {
      max: dbConfig.local.pool.max,
      min: dbConfig.local.pool.min,
      acquire: dbConfig.local.pool.acquire,
      idle: dbConfig.local.pool.idle,
    },
  }
);

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.role = require("./role.model")(sequelize, Sequelize);
db.user = require("./user.model")(sequelize, Sequelize);
db.produk = require("./produk.model")(sequelize, Sequelize);
db.pemasok = require("./pemasok.model")(sequelize, Sequelize);
db.pelanggan = require("./pelanggan.model")(sequelize, Sequelize);
db.pembelian = require("./pembelian.model")(sequelize, Sequelize);
db.penjualan = require("./penjualan.model")(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "role_id",
  otherKey: "user_id",
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "user_id",
  otherKey: "role_id",
});

db.pembelian.belongsTo(db.pemasok, {
  foreignKey: "pemasok_id",
});
db.pembelian.belongsTo(db.produk, {
  foreignKey: "produk_id",
});

db.penjualan.belongsTo(db.pelanggan, {
  foreignKey: "pelanggan_id",
});
db.penjualan.belongsTo(db.produk, {
  foreignKey: "produk_id",
});

db.ROLES = ["admin", "pelanggan"];

module.exports = db;
