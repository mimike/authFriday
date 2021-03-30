const express = require('express');
const asyncHandler = require('express-async-handler');
//const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { Bathroom } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async(req, res) => {

}))

module.exports = router;

/////////////
