const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const searchRouter = require('./search.js')
const bathroomRouter = require('./bathroom.js');

// API just for organization here.

// '/api/session
router.use('/session', sessionRouter);
//api/users
router.use('/users', usersRouter);
// api/search
router.use('/search', searchRouter);
// api/bathroom
router.use("/bathroom", bathroomRouter);  //bathroomSSS??
router.use('/search', searchRouter)

module.exports = router;
