const { where } = require("sequelize");
const { forms: Forms, responses: Responses, users: Users } = require("../models");

module.exports = {
  getAllForms: async(t) => {
    const forms = await Forms.findAll({
      include: [
        { model: Responses, include: { model: Users} },
    ]
    });

    return forms

  },
  createForm: async (formObj, t) => {
    const formCreated = await Forms.create(formObj, {
      transaction: t,
    });

    return formCreated;
  },

  getFormById: async (formId, t) => {
    const formObj = await Forms.findOne(
      {
        raw: true,
        where: {
          id: Number(formId),
        },
      },
      { transaction: t }
    );

    return formObj;
  },

  saveFormOpenCount: async(updatedObj, t) => {
    const {id, openCounts} = updatedObj
    const responseSaved = await Forms.update({openCounts}, {
      where: {id: Number(id)},
      transaction: t
    });
    return responseSaved
  },

  saveResponse: async(responseObj, t) => {
    const responseSaved = await Responses.create(responseObj, {
      transaction: t
    });
    return responseSaved
  },

  getResponse: async(obj, t) => {
  const response = await Responses.findOne({
    raw: true,
    where: obj,
    transaction: t
  })
  return response
  }
};
