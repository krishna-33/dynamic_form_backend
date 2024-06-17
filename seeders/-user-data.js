"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        id: 1,
        email: "admin@gmail.com",
        password: "admin123",
        fname: "system",
        lname: "admin",
        type: "admin",
        created_at: new Date(),
        updated_at: new Date(),
      },
     {
        id: 2,
        email: "user@gmail.com",
        password: "user123",
        fname: 'John',
        lname: 'Atlas',
        type: "user",
        created_at: new Date(),
        updated_at: new Date(),
     },
     {
        id: 3,
        email: "user1@gmail.com",
        password: "user1234",
        fname: 'Andy',
        lname:'Smith',
        type: "user",
        created_at: new Date(),
        updated_at: new Date(),
     }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
