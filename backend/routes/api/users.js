//This file will hold the resources for the route paths beginning with /api/users.

const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

const validateSignup = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('username')
    .exists({ checkFalsy: true })
    .isLength({ max: 30 })
    .withMessage('Please provide a username with at least 4 characters.'),
  check('username')
    .not()
    .isEmail()
    .withMessage('Username cannot be an email.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  // check('address')
  //   .exists({ checkFalsy: true })
  //   .isLength({ max: 255 })
  //   .withMessage('u need an address'),
  // check('city')
  //   .exists({ checkFalsy: true })
  //   .withMessage('You need an city'),
  // check('state')
  //   .exists({ checkFalsy: true })
  //   .withMessage('You need a state'),
  // check('') finish later!!!
  handleValidationErrors,
];
// returning data api 5000

//post /api/users   ... this could be an empty str.
router.post('/', validateSignup, asyncHandler(async (req, res) => {
  const { email, username, firstName, lastName, address, city, state, password } = req.body;
  // User.signup lives in the models/user.js file. Method on a MODEL
  const user = await User.signup({ email, username, firstName, lastName, address, city, state, password });
  // what all do we need here, we don't need this info unless they're posting a new BR.

  await setTokenCookie(res, user); //security

  return res.json({
    user,    // returns userId find by pk w/o hashedPassword.
  });
}),
);

module.exports = router;
