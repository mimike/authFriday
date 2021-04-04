const express = require('express');
const asyncHandler = require('express-async-handler');

const { Review } = require('../../db/models');
//const { Bathroom } = require('../../db/models')
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();
const validateReview = [
    check('reviewText')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a review.'),
    check('rating')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a rating'),
    handleValidationErrors,
  ];

// /api/review
//http://localhost:5000/api/review GET all WORKS!
router.get('/',  validateReview, asyncHandler(async (req, res) => {
    const reviews = await Review.findAll(
        // where: {
        //         reviewText
        // }
      )
    // TOMORROW: how to make a query for reviews that belong to a bathrooom
    return res.json(reviews);
  }),
  );

//post /api/review
//http://localhost:5000/api/review POST works!
router.post('/', validateReview, asyncHandler(async (req, res) => {
    const { reviewerId, bathroomId, reviewText, rating, reviewImgUrl } = req.body;
    //wonder if i have to made a .addReview in the models/review.js file ?!!
    const review = await Review.create({ reviewerId, bathroomId, reviewText, rating, reviewImgUrl });
    // if(review) res.json("review created!")
    return res.json(review)
  }),
  );

//api/review/id GET not done
router.get('/:id', asyncHandler(async(req, res)=> {
    const id = req.params.id;
    const reviews = await Review.findAll({where: { bathroomId: id}})
    return res.json(reviews)
}))

//api/review/id
//http://localhost:5000/api/review/id PATCH. OMG THIS WORKS.

  router.patch('/', asyncHandler(async (req, res) => { // OMG THIS WORKS.
    const reviewId = req.body.id
    const rating = req.body.rating
    const reviewImgUrl = req.body.reviewImgUrl
    const reviewText = req.body.reviewText // const reviewContent = req.
    const review = await Review.findByPk(reviewId)  // {rev text, rating, etc}

    review.reviewText = reviewText; //over riding , reassigned w/new content
    review.rating = rating;
    review.reviewImgUrl = reviewImgUrl;

    await review.save()    // async for querying database
    return res.json("review and rating edited")

  }))


//http://localhost:5000/api/review/id DELETE works!

  router.delete('/:id',  asyncHandler(async (req, res) => {
    const reviewerId = req.params.id
    const review = await Review.findByPk(reviewerId);
    review.destroy();
    // if(!review){
    //     res.json("review is deleted!")
    // }
    return res.json(review);
  }),
  );


  module.exports = router;
// router.patch('/:id', asyncHandler(async (req, res) => {
//     // const { bathroomId, updatedReviewText, updatedRating, updatedReviewImgUrl } = req.body;
//     const userId= req.params.id;  //userId is reviewerId on the table
//     const review = await Review.findByPk(userId);
//     // if (review.reviewerId === userId && review.bathroomId === bathroomId){
//         updatedReviewText = review.reviewText // key is reviewText
//         updatedRating = review.rating
//         updatedReviewImgUrl = review.reviewImgUrl
//     // }
//     // review.save();
//     return res.json(review)
//     //editedReview = await Review.update()

//   }),
//   );
