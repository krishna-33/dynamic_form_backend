"use strict";
const DataTypes = require("sequelize");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
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
        type: DataTypes.ENUM('user', 'admin'),
        defaultValue: 'user',
      },
      createdAt: {
        type: DataTypes.DATE,
        field: "created_at",
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: "updated_at",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
  },
};
