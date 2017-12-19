(function() {
  "use strict";

  const express = require('express');
  const url = require('url');

  // Constants
  const PORT = 8080;
  const HOST = '0.0.0.0';
  
  // App
  const app = express();
  app.get('/', (req, res) => {
    res.send('Hello world\n');
    console.log(req.headers);
  });

  app.use((req, res) => {
    let urlObj = url.parse(req.originalUrl);
    res.send('Hello world\n');
    console.log(req.headers);
    console.dir(urlObj);
  })

  process.on('SIGINT', (e) => {
    console.log('\n...exiting');
    process.exit();
  });

  app.listen(PORT, HOST);
  console.log(`Running on http://${HOST}:${PORT}`);  
  console.log('press Ctrl-C to exit');  
})();
