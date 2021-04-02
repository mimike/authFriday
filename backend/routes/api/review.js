const express = require('express');
const asyncHandler = require('express-async-handler');

const { Review } = require('../../db/models');
//const { Bathroom } = require('../../db/models')
//const { check } = require('express-validator');

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

// /api/review
//http://localhost:5000/api/review GET all WORKS!
router.get('/',  asyncHandler(async (req, res) => {
    const reviews = await Review.findAll(
    //     where: {
    //             reviewText
    //     }
    //
    // TOMORROW: how to make a query for reviews that belong to a bathrooom

);
    return res.json(reviews);
  }),
  );

//post /api/review
//http://localhost:5000/api/review POST works!
router.post('/',  asyncHandler(async (req, res) => {
    const { reviewerId, bathroomId, reviewText, rating, reviewImgUrl } = req.body;
    //wonder if i have to made a .addReview in the models/review.js file ?!!
    const review = await Review.create({ reviewerId, bathroomId, reviewText, rating, reviewImgUrl });
    // if(review) res.json("review created!")
    return res.json(review)
  }),
  );

//api/review/id GET not done
router.get('/:id',  asyncHandler(async(req, res)=> {

}))

//api/review/id
//http://localhost:5000/api/review/id PATCH not right!
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
    return res.json(review)
    //editedReview = await Review.update()

  }),
  );

//http://localhost:5000/api/review/id DELETE works!

  router.delete('/:id',  asyncHandler(async (req, res) => {
    const reviewerId = req.params.id
    const review = await Review.findByPk(reviewerId);
    review.destroy();
    // if(!review){
    //     res.json("review is deleted!")
    // }
    res.json(review);
  }),
  );


  module.exports = router;
