(function() {
  "use strict";

  const express = require('express');
  const url = require('url');

  // Constants
  const PORT = 8080;
  const HOST = '0.0.0.0';
  
  var app = express()
  var router = express.Router()
  
  // a middleware function with no mount path. This code is executed for every request to the router
  router.use(function (req, res, next) {
    console.log('Time:', Date.now())
    next()
  })
  
  // a middleware sub-stack shows request info for any type of HTTP request to the /select/:table path
  router.use('/select/:table', function (req, res, next) {
    console.log('Request URL:', req.originalUrl)
    next()
  }, function (req, res, next) {
    console.log('Request Type:', req.method)
    next()
  })
  
  // a middleware sub-stack that handles GET requests to the /user/:id path
  router.get('/select/:table', function (req, res, next) {
    // if the table is stock, skip to the next router
    if (req.params.table === 'stock') {
      console.log('table stock');
      next('route');
    // otherwise pass control to the next middleware function in this stack
    }
    else next()
  }, function (req, res, next) {
    // render a regular page
    res.send('regular')
  })
  
  // handler for the /select/:table path, which renders a special page
  router.get('/select/:table', function (req, res, next) {
    console.log(req.params.table)
    res.send('special')
  })
  
  // mount the router on the app
  app.use('/', router)

  process.on('SIGINT', (e) => {
    console.log('\n...exiting');
    process.exit();
  });

  app.listen(PORT, HOST);
  console.log(`Running on http://${HOST}:${PORT}`);  
  console.log('press Ctrl-C to exit');  
})();
