module.exports = (sequelize, DataTypes) => {
  const Froms = sequelize.define(
    "forms",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER(20),
      },
      title: {
        type: DataTypes.STRING(500),
        allowNull: true,
      },
      description: {
        type: DataTypes.STRING(1000),
        allowNull: true,
      },
      openCounts: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      questions: {
        type: DataTypes.JSON(),
        allowNull: true,
      },
      createdAt: { 
         type: DataTypes.DATE, 
         field: "created_at" 
      },
      updatedAt: { 
         type: DataTypes.DATE,
         field: "updated_at" 
      },
    },
    {
      timestamps: true,
    }
  );

  Froms.associate = function (models) {
     // associations can be defined here
     Froms.hasMany(models.responses, {
        foreignKey: 'form_id',
     });
  };

  return Froms;
};
