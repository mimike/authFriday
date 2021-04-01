const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const searchRouter = require('./search.js')
const bathroomRouter = require('./bathroom.js');
const reviewRouter = require('./review.js');
//const reservationRouter = require('./reservation.js')

// '/api/session
router.use('/session', sessionRouter);
//api/users
router.use('/users', usersRouter);
// api/search
router.use('/search', searchRouter);
// api/bathroom
router.use("/bathroom", bathroomRouter);
//api/review
router.use("/review", reviewRouter);

//api/review
//router.use("/review", reviewRouter);
//api/reservation
//router.use("/reservation", reservationRouter);


module.exports = router;
