const express = require('express');
const asyncHandler = require('express-async-handler');
//const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Review } = require('../../db/models');
//const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const router = express.Router();

// const validateReview = [
//     check('reviewText')
//       .exists({ checkFalsy: true })
//       .withMessage('Please provide a review.'),
//     check('rating')
//       .exists({ checkFalsy: true })
//       .withMessage('Please provide a rating'),
//     handleValidationErrors,
//   ];

//get /api/review
//http://localhost:5000/api/review GET
router.get('/', asyncHandler(async (req, res) => {

    const reviews = await Review.findAll();
    res.json(reviews);
  }),
  );

//post /api/review
//http://localhost:5000/api/review POST
router.post('/', asyncHandler(async (req, res) => {
    const { reviewerId, bathroomId, reviewText, rating, reviewImgUrl } = req.body;
    //wonder if i have to made a .addReview in the models/review.js file ?!!
    const review = await Review.create({ reviewerId, bathroomId, reviewText, rating, reviewImgUrl });
    // if(review) res.json("review created!")
    return review;
  }),
  );


//http://localhost:5000/api/review/id DELETE
//deletes from db but postman hangs... also make sure to add more reviews.
  router.delete('/:id', asyncHandler(async (req, res) => {
    const reviewerId = req.params.id
    const review = await Review.findByPk(reviewerId);
    review.destroy();
    // if(!review){
    //     res.json("review is deleted!")
    // }
    // return
  }),
  );

//http://localhost:5000/api/review/id patch
router.patch('/:id', asyncHandler(async (req, res) => {
    // const { bathroomId, updatedReviewText, updatedRating, updatedReviewImgUrl } = req.body;

    const userId= req.params.id;  //userId is reviewerId on the table
    const review = await Review.findByPk(userId);

    // if (review.reviewerId === userId && review.bathroomId === bathroomId){
        updatedReviewText = review.reviewText // key is reviewText
        updatedRating = review.rating
        updatedReviewImgUrl = review.reviewImgUrl
    // }
    // review.save();

    res.json(review)
    //editedReview = await Review.update()


  }),
  );

  module.exports = router;
