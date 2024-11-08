const express = require('express');
const auth = require('../middlewares/auth');
const validate = require('../middlewares/validate');
const userValidation = require('../validations/user.validation');
const filesController = require('../controllers/files');

const router = express.Router();

router
  .get('/', filesController.getFiles);
module.exports = router;

