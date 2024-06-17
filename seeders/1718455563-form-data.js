"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("forms", [
      {
        id: 1,
        title: "user form",
        description: "user details",
        questions: JSON.stringify([
          {
            value: "",
            question: "Enter email",
            answerType: "email",
            isRequired: true,
          },
          {
            value: "",
            question: "Enter age",
            max: "13",
            min: "1",
            answerType: "number",
            isRequired: true,
          },
          {
            value: "",
            question: "Enter city",
            answerType: "text",
            isRequired: true,
          },
          {
            value: ["male", "female"],
            question: "Select gender",
            answerType: "radio_button",
            isRequired: true,
          },
        ]),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        title: "employee form",
        description: "employee details",
        questions: JSON.stringify([
          {
            value: "",
            question: "Enter email",
            answerType: "email",
            isRequired: true,
          },
          {
            value: "",
            question: "Enter age",
            max: "13",
            min: "1",
            answerType: "number",
            isRequired: true,
          },
          {
            value: "",
            question: "Enter city",
            answerType: "text",
            isRequired: true,
          },
          {
            value: ["male", "female"],
            question: "Select gender",
            answerType: "radio_button",
            isRequired: true,
          },
        ]),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("forms", null, {});
  },
};
