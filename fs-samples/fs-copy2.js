(function() {
  "use strict";

  const fs = require('fs');
  // work with a text file named as this script and add extension
  const filename = __filename + '.txt';
  const targetFilename = filename+"_copy";

  // remove target file, to play it safe
  if (fs.exists(targetFilename)) {
    fs.unlink(targetFilename, err => console.log(err));
  }

  // copy file
  fs.createReadStream(filename).pipe(fs.createWriteStream(targetFilename));
})();
