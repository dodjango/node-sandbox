(function() {
  "use strict";
  
  const fs = require('fs-extra');

  // work with a text file named as this script and add extension
  const filename = __filename + '.txt';
  const targetFilename = filename+"_copy";

  // remove target file
  if (fs.exists(targetFilename)) {
    fs.unlink(targetFilename).then(() => {
      console.log('target removed...')
    })
    .catch(err => {
      console.error(err)
    })
  }

  // copy file
  fs.copy(filename, targetFilename)
  .then(() => {
    console.log('success!')
  })
  .catch(err => {
    console.error(err)
  })
})();