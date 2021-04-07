const express = require('express');
const asyncHandler = require('express-async-handler');
//const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Bathroom, Review, User } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const review = require('../../db/models/review');

const router = express.Router();

// const validateSignup = [
//     check('email')
//       .exists({ checkFalsy: true })
//       .isEmail()
//       .withMessage('Please provide a valid email.'),
//     // check('') finish later!!!
//     handleValidationErrors,
//   ];

//http://localhost:5000/api/bathroom GET request WORKS!
router.get('/', asyncHandler(async (req, res) => {
    const bathrooms = await Bathroom.findAll({ limit: 100 });

    return res.json(bathrooms)
}));

//http://localhost:5000/api/bathroom POST request WORKS!
router.post('/create', asyncHandler(async (req, res) => {
    //console.log("DSIfjlaiogfhpeaoiufhwedpil")
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

    if (bathroom) {
        res.json({ bathroom })      //
    }
    res.json({ bathroom })
}))




//just wrote this wednesday night, needs help?
//http://localhost:5000/api/bathroom/:id GET by ID WORKS!
router.get('/:id', asyncHandler(async (req, res) => {
    const bathroomId = Number(req.params.id);  //parsing into an actual num

    const bathroom = await Bathroom.findByPk(bathroomId, {
        include:
        {      // include the model Review assoc w/the Bathrm.
            model: Review,
            include: User  // inlcude the model User assoc w/the review
        }
    })    // object that is the br of that ID

    return res.json(bathroom);
}))

//http://localhost:5000/api/bathroom/:id PATCH not done...
router.patch('/:id', asyncHandler(async (req, res) => {

}))

//http://localhost:5000/api/bathroom/id DELETE WORKS!
router.delete('/:id', asyncHandler(async (req, res) => {

    const bathroomId = req.params.id;
    const bathroom = await Bathroom.findByPk(bathroomId)

    bathroom.destroy();
    return res.json(bathroom);

}))

module.exports = router
