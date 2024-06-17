module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "users",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER(20),
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING(500),
      },

      fname: {
        allowNull: false,
        type: DataTypes.STRING(100),
      },

      lname: {
        allowNull: false,
        type: DataTypes.STRING(100),
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING(500),
      },
      type: {
        allowNull: false,
        type: DataTypes.ENUM("user", "admin"),
        defaultValue: "user",
      },
      createdAt: {
        type: DataTypes.DATE,
        field: "created_at",
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: "updated_at",
      },
    },
    {
      timestamps: true,
    }
  );

  return Users;
};
