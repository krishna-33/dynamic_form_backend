const { users: Users } = require("../models");

module.exports = {
  createUser: async (userobj, t) => {
    const userCreated = await Users.create(userobj, {
      transaction: t,
    });

    return userCreated;
  },
  getUser: async (userobj, t) => {
    const userFounded = await Users.findOne(
      {
        raw: true,
        where: userobj,
      },
      { transaction: t }
    );

    return userFounded;
  },
};
