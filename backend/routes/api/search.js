const express = require('express');
const asyncHandler = require('express-async-handler');
//const { check } = require('express-validator');
//const { handleValidationErrors } = require('../../utils/validation');
const  Sequelize = require("sequelize")
const Op = Sequelize.Op;
const router = express.Router();
const { Bathroom } = require('../../db/models');

//https//localhost:5000/api/search/madison WORKS
router.get('/:find', asyncHandler(async(req, res) => {

    const userSearchInput = req.params.find;
    //find all
    const bathrooms = await Bathroom.findAll({ limit: 30,
        where: {
            [Op.or]: [
                {city: { [ Op.iLike]: `%${userSearchInput}%`}}, //find all in a state
                {state: { [ Op.iLike]: `%${userSearchInput}%`}}
            ]
        }
    })
    return res.json({bathrooms});
}))

module.exports = router;

/////////////
