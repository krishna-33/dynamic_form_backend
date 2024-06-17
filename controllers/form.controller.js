const { sendSuccessRespose, sendErrorResponse } = require("../utils/response");
const formServices = require("../services/form.service");
const {
  FORM_CREATED,
  SOMTHING_WENT_WRONG,
  FORM_FOUND,
  FORM_NOT_FOUND,
  RESPONSE_SAVED,
  FORM_RETRIVED,
  NOT_AUTHERIZED,
  FORM_OPENED,
  RESPONSE_SAVED_ALREADY,
} = require("../utils/message");
const { SUCCESS, ERROR, NOT_FOUND, BAD_REQUEST } = require("../utils/status");
const { sequelize } = require("../models");

module.exports = {
  getAllForms: async (req, res) => {
    const t = await sequelize.transaction();
    try {
      const forms = await formServices.getAllForms(t);
      await t.commit();
      sendSuccessRespose(res, forms, FORM_RETRIVED, SUCCESS);
    } catch (error) {
      console.log("error", error);
      await t.rollback();
      sendErrorResponse(res, SOMTHING_WENT_WRONG, ERROR);
    }
  },
  createForm: async (req, res) => {
    const t = await sequelize.transaction();
    try {
      if (req.user.type == "user") {
        t.rollback();
        return sendErrorResponse(res, NOT_AUTHERIZED, ERROR);
      }
      let formObj = req.body;
      const createdForm = await formServices.createForm(formObj, t);
      await t.commit();
      sendSuccessRespose(res, createdForm, FORM_CREATED, SUCCESS);
    } catch (error) {
      console.log("error", error);
      await t.rollback();
      sendErrorResponse(res, SOMTHING_WENT_WRONG, ERROR);
    }
  },
  getFormDetails: async (req, res) => {
    const t = await sequelize.transaction();
    try {
      const { id } = req.params;
      const form = await formServices.getFormById(id, t);
      if (!form) {
        await t.commit();
        return sendErrorResponse(res, {}, FORM_NOT_FOUND, NOT_FOUND);
      }
      await t.commit();
      sendSuccessRespose(res, form, FORM_FOUND, SUCCESS);
    } catch (error) {
      console.log("error", error);
      await t.rollback();
      sendErrorResponse(res, SOMTHING_WENT_WRONG, ERROR);
    }
  },
  saveFormOpenCount: async (req, res) => {
    const t = await sequelize.transaction();
    try {
      const { form_id: id } = req.body;
      const form = await formServices.getFormById(id, t);
      if (!form) {
        await t.commit();
        return sendErrorResponse(res, {}, FORM_NOT_FOUND, NOT_FOUND);
      }
      const updatedObj = { id, openCounts: ++form.openCounts };
      await formServices.saveFormOpenCount(updatedObj, t);
      await t.commit();
      sendSuccessRespose(res, {}, FORM_OPENED, SUCCESS);
    } catch (error) {
      console.log("error", error);
      await t.rollback();
      sendErrorResponse(res, SOMTHING_WENT_WRONG, ERROR);
    }
  },
  saveFormResponse: async (req, res) => {
    const t = await sequelize.transaction();
    try {
      let responseObj = req.body;
      const formResponse = await formServices.getResponse(
        { user_id: req.user.id, form_id: responseObj.form_id },
        t
      );
      if (formResponse) {
        await t.rollback();
        return sendErrorResponse(res, RESPONSE_SAVED_ALREADY, BAD_REQUEST);
      }
      await formServices.saveResponse(
        {
          user_id: req.user.id,
          ...responseObj,
        },
        t
      );
      await t.commit();
      sendSuccessRespose(res, {}, RESPONSE_SAVED, SUCCESS);
    } catch (error) {
      console.log("error", error);
      await t.rollback();
      sendErrorResponse(res, SOMTHING_WENT_WRONG, ERROR);
    }
  },
};
