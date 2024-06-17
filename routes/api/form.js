const express = require('express');
const authMiddleWare = require('../../middleware/auth.middleware')
const formController = require('../../controllers/form.controller');
const router = express.Router();

router.get('/', authMiddleWare, formController.getAllForms)
      .post('/', authMiddleWare, formController.createForm)
      .get('/:id',authMiddleWare, formController.getFormDetails)
      .post('/open', authMiddleWare, formController.saveFormOpenCount)
      .post('/response', authMiddleWare, formController.saveFormResponse);

module.exports = router;