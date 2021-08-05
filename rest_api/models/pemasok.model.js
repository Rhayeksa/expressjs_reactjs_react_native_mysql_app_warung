module.exports = (sequelize, Sequelize) => {
  const Pemasok = sequelize.define(
    "pemasok",
    {
      nama: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter Nama",
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: {
            msg: "Please enter Email",
          },
          isEmail: true,
        },
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter Phone",
          },
          isNumeric: true,
          len: [11, 15],
        },
      },
      photo: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter Photo",
          },
        },
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
  return Pemasok;
};
