'use strict';
const fs = require('fs');

module.exports = function(dirName, extension, callback) {
  fs.readdir(dirName, (err, list) => {
    if (err) {
      return callback(err);
    } else {
      let listArray = [];
      for (let i = 1; i < list.length; i++) {
        const separatedExt = list[i].split('.')[1];

        if (separatedExt === extension) {
          if (list[i] !== undefined) {
            listArray.push(list[i]);
          }
        }
      }
      callback(null, listArray.filter(item => item !== undefined));
    }
  });
};
