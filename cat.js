const fs = require('fs');

module.exports = function(target) {

  fs.readFile(target, (err, data) => {
    if (err) throw err;
    console.log(data.toString());
  });

};
