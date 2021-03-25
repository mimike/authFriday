
const jwt = require('jsonwebtoken');
const { jwtConfig } = require('../config');
const { User } = require('../db/models');

const { secret, expiresIn } = jwtConfig;

// Sends a JWT Cookie
// setting the JWT cookie after a user is logged in or signed up. It takes in the response and the session user and generates a JWT using the imported secret.

const setTokenCookie = (res, user) => {
    // Create the token.
    const token = jwt.sign(
      { data: user.toSafeObject() },
      secret,
      { expiresIn: parseInt(expiresIn) }, // 604,800 seconds = 1 week
    );

    const isProduction = process.env.NODE_ENV === "production";

    // Set the token cookie
    res.cookie('token', token, {
      maxAge: expiresIn * 1000, // maxAge in milliseconds
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction && "Lax",
    });

    return token;
  };

//verify and parse the JWT's payload and search the database for a User with the id in the payload (this query should use the currentUser scope since the hashedPassword is not needed for this operation. If there is a User found, then save the user to a key of user onto the request. If there is an error verifying the JWT or a User cannot be found with the id, then clear the token cookie from the response.

const restoreUser = (req, res, next) => {
    // token parsed from cookies
    const { token } = req.cookies;

    return jwt.verify(token, secret, null, async (err, jwtPayload) => {
      if (err) {
        return next();
      }

      try {
        const { id } = jwtPayload.data;
        req.user = await User.scope('currentUser').findByPk(id);
      } catch (e) {
        res.clearCookie('token');
        return next();
      }

      if (!req.user) res.clearCookie('token');

      return next();
    });
  };

  // If there is no current user, return an error
const requireAuth = [
    restoreUser,
    function (req, res, next) {
      if (req.user) return next();

      const err = new Error('Unauthorized');
      err.title = 'Unauthorized';
      err.errors = ['Unauthorized'];
      err.status = 401;
      return next(err);
    },
  ];

  module.exports = { setTokenCookie, restoreUser, requireAuth };
