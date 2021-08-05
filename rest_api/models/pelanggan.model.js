module.exports = (sequelize, Sequelize) => {
  const Pelanggan = sequelize.define(
    "pelanggan",
    {
      nama: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter Name",
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: {
            msg: "Please enter Name",
          },
          isEmail: true,
        },
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter Name",
          },
          isNumeric: true,
          len: [11, 15],
        },
      },
      photo: {
        type: Sequelize.STRING,
      },
      alamat: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter alamat",
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
  return Pelanggan;
};
