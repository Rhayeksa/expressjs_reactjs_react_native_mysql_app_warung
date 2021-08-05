module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    "user",
    {
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter your email",
          },
        },
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter your password",
          },
        },
      },
    },
    {
      sequelize,
      paranoid: true,
      timestamps: true,
      createdAt: "create_at",
      updatedAt: "update_at",
      deletedAt: "deleted_at",
    }
  );

  return User;
};
