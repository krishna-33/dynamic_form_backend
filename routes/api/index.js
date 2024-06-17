const express = require('express');
const formRoutes = require('./form');
const authRoutes = require("./auth");

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/forms', formRoutes);

module.exports = router;
