const express = require('express');
const asyncHandler = require('express-async-handler');
//const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Bathroom } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

router.get('/', asyncHandler(async(req, res) => {
    const bathrooms = await Bathroom.findAll();
    return res.json(bathrooms)

}));

router.post('/', asyncHandler(async(req, res) => {
    const {
        ownerId,
        title,
        description,
        address,
        city,
        state,
        costPerDay,
        locationType,
        bathroomImgUrl
    } = req.body

    const bathroom = await Bathroom.create({
        ownerId,
        title,
        description,
        address,
        city,
        state,
        costPerDay,
        locationType,
        bathroomImgUrl
    });
    res.json(bathroom)
}))

module.exports = router
