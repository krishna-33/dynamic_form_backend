'use strict';
const DataTypes = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('forms', 
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
      questions: {
        type: DataTypes.JSON(),
        allowNull: true,
      },
      openCounts : {
        type:DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false
      },
      createdAt: { 
         type: DataTypes.DATE, 
         field: "created_at" 
      },
      updatedAt: { 
         type: DataTypes.DATE,
         field: "updated_at" 
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('forms');
  }
};
