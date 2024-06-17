const { SOMTHING_WENT_WRONG, USER_SIGNIN, USER_NOT_FOUND, USER_SIGNUP, USER_ALREADY_REGISTERED, WRONG_PASSWORD } = require("../utils/message");
const { ERROR, SUCCESS, NOT_FOUND } = require("../utils/status");
const authServices = require("../services/auth.service");
const { sequelize } = require("../models");
const { sendErrorResponse, sendSuccessRespose } = require("../utils/response");
const jwt = require("jsonwebtoken");

module.exports = {
  signUp: async (req, res) => {
    const t = await sequelize.transaction();
    try {
      const user = await authServices.getUser({ email: req.body.email }, t);
      if (user) {
        await t.rollback();
        return sendErrorResponse(res, USER_ALREADY_REGISTERED, ERROR);
      }
      const newUser = await authServices.createUser(req.body, t);
      await t.commit();
      sendSuccessRespose(res, newUser, USER_SIGNUP, SUCCESS);
    } catch (error) {
      console.log("error", error);
      await t.rollback();
      sendErrorResponse(res, SOMTHING_WENT_WRONG, ERROR);
    }
  },

  signIn: async (req, res) => {
    const t = await sequelize.transaction();
    try {
      const user = await authServices.getUser(req.body, t);
      if (!user) {
        const checkEmail =  await authServices.getUser({email: req.body.email}, t);
        let msg = USER_NOT_FOUND
        if(checkEmail){
          msg = WRONG_PASSWORD
        }
        await t.rollback();
        return sendErrorResponse(res, msg, NOT_FOUND);
      }
      const token = jwt.sign({ id: user?.id }, process.env.JWT_SECRET_KEY);
      await t.commit();
      sendSuccessRespose(res, { ...user, token }, USER_SIGNIN, SUCCESS);
    } catch (error) {
      console.log("error", error);
      await t.rollback();
      sendErrorResponse(res, SOMTHING_WENT_WRONG, ERROR);
    }
  },
};
