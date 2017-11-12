(function() {
  "use strict";

  const fs = require('fs');
  // work with a text file named as this script and add extension
  const filename = __filename + '.txt';

  // remove file if it exists
  if (fs.existsSync(filename)) {
    fs.unlinkSync(filename);
  }
  // write some content to the file
  fs.writeFileSync(filename, 'hello world');
  // read content agan and write it to the console
  fs.readFile(filename, function (err, data) {
    if (err) {
      console.error(err.toString());
    }
    console.log(data.toString());
  });
})();
