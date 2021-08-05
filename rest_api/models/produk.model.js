module.exports = (sequelize, Sequelize) => {
  const Produk = sequelize.define(
    "produk",
    {
      kode: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: {
            msg: "Please enter kode",
          },
        },
      },
      nama: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter nama",
          },
        },
      },
      stok: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter stok",
          },
        },
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

  return Produk;
};
