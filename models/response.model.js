module.exports = (sequelize, DataTypes) => {
  const Responses = sequelize.define(
    "responses",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER(20),
      },
      form_id: {
        allowNull: false,
        type: DataTypes.INTEGER(20),
      },
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER(20),
      },
      response: {
        type: DataTypes.JSON(),
        allowNull: true,
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
  Responses.associate = function (models) {
    Responses.hasOne(models.users, {
       foreignKey: 'id',
    });
 };

  return Responses;
};
