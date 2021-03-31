// ;
// const express = require('express');
// const asyncHandler = require('express-async-handler');
// //const { setTokenCookie, requireAuth } = require('../../utils/auth');
// const { Bathroom } = require('../../db/models');
// //const { check } = require('express-validator');
// const { handleValidationErrors } = require('../../utils/validation');
// const router = express.Router();

// const validateReview = [
//     check('reviewText')
//       .exists({ checkFalsy: true })
//       .withMessage('Please provide a review.'),
//     check('rating')
//       .exists({ checkFalsy: true })
//       .withMessage('Please provide a rating'),
//     handleValidationErrors,
//   ];

// //get /api/review I DON"T REALLY NEED THIS ROUTE DO I?
// router.get('/', validateReview, asyncHandler(async (req, res) => {


//     return res.json({
//       review,
//     });
//   }),
//   );

// //post /api/review
// router.post('/', validateReview, asyncHandler(async (req, res) => {
//     const { reviewText, rating } = req.body;
//     //wonder if i have to made a .addReview in the models/review.js file ?!!
//     const review = await User.addReview({ reviewText, rating });
//     //await setTokenCookie(res, user); //security
//     return res.json({
//       review,
//     });
//   }),
//   );
