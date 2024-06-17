const jwt = require("jsonwebtoken");
const { users: Users } = require("../models");


module.exports = async function (req, res, next) {
  const token = req.header("Authorization").split(' ')[1];
  if (!token) {
    return res.json({
      status: 500,
      success: false,
      data: "You are not authorized to access the api",
    });
  } else {
    const decodeTooken = jwt.decode(token, process.env.JWT_SECRET_KEY);


    if (decodeTooken?.id) {
      const user = await Users.findOne({
        raw: true,
        where: {id: decodeTooken?.id}
      });
      if (!user) {
        return res.json({
          status: 401,
          success: false,
          data: "user not found",
        });
      }
      else{
        req.user = user
        next()
      }
    } else {
        return res.json({
            status: 401,
            success: false,
            data: "Invalid token",
          });
    }
  }
};
