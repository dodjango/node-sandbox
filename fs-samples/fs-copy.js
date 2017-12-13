(function() {
  "use strict";

  const fs = require('fs');
  // work with a text file named as this script and add extension
  const filename = __filename + '.txt';
  const targetFilename = filename+"_copy";

  // remove target file
  if (fs.exists(targetFilename)) {
    fs.unlink(targetFilename, function(err) {
      return console.log(err);
    });
  }

  // copy file
  copyFile(filename, targetFilename, function(err) {
    if (typeof err !== 'undefined') return console.log(err);
  });

  function copyFile(source, target, cb) {
    let cbCalled = false;
  
    let rd = fs.createReadStream(source);
    rd.on("error", function(err) {
      done(err);
    });
    let wr = fs.createWriteStream(target);
    wr.on("error", function(err) {
      done(err);
    });
    wr.on("close", function(ex) {
      done();
    });
    rd.pipe(wr);
  
    function done(err) {
      if (!cbCalled) {
        cb(err);
        cbCalled = true;
      }
    }
  }
})();
