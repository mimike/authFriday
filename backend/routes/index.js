const express = require('express');
const apiRouter = require('./api');
const router = express.Router();

router.use('/api', apiRouter); 

if (process.env.NODE_ENV === 'production') {  // only run in heroku produc not local.
    const path = require('path');    //path comes from node, deals w/file systems path.
    // Serve the frontend's index.html file at the root route
    router.get('/', (req, res) => {  // this route sets cookie and sends back
      res.cookie('XSRF-TOKEN', req.csrfToken());
      return res.sendFile(
        path.resolve(__dirname, '../../frontend', 'build', 'index.html')   //joins these all together and returns a path?
      );
    });

    // Serve the static assets in the frontend's build folder
    router.use(express.static(path.resolve("../frontend/build")));

    // Serve the frontend's index.html file at all other routes NOT starting with /api
    // why we are
    router.get(/^(?!\/?api).*/, (req, res) => {
      res.cookie('XSRF-TOKEN', req.csrfToken());
      return res.sendFile(
        path.resolve(__dirname, '../../frontend', 'build', 'index.html')
      );
    });
  }

router.get('/hello/world', function(req, res) {
  res.cookie('XSRF-TOKEN', req.csrfToken());
  res.send('Hello World!');
});

// Add a XSRF-TOKEN cookie in development
if (process.env.NODE_ENV !== 'production') {
    router.get('/api/csrf/restore', (req, res) => {
      res.cookie('XSRF-TOKEN', req.csrfToken());
      res.status(201).json({});
    });
  }


module.exports = router;
