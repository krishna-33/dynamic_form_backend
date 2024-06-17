"use strict";
const DataTypes = require("sequelize");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("responses", {
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
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("responses");
  },
};
