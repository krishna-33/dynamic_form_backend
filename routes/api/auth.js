const express = require('express');
const authController = require('../../controllers/auth.comtroller');
const router = express.Router();

router.post("/signup", authController.signUp)
      .post("/signin", authController.signIn);

module.exports = router;