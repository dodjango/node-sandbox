(function() {
  "use strict";

  const fs = require('fs');
  const filename = __filename + '.txt';

  if (fs.existsSync(filename)) {
    fs.unlinkSync(filename);
  }
  fs.writeFileSync(filename, 'hello world');
  fs.readFile(filename, function (err, data) {
    if (err) {
      console.error(err.toString());
    }
    console.log(data.toString());
  });
})();
