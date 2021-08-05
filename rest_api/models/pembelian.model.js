module.exports = (sequelize, Sequelize) => {
  const Pembelian = sequelize.define(
    "pembelian",
    {
      kode: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter kode",
          },
        },
      },
      harga: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter harga",
          },
          isNumeric: true,
        },
      },
      banyak: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter banyak",
          },
          isNumeric: true,
        },
      },
      note: {
        type: Sequelize.STRING,
      },
    },
    {
      sequelize,
      paranoid: true,
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: "deleted_at",
    }
  );
  return Pembelian;
};
