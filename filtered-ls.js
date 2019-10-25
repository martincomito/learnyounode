'use strict';
const fs = require('fs');

const path = process.argv[2];

const extension = process.argv[3];

fs.readdir(path, (err, list) => {
  if (err) throw err;

  for (let i = 0; i < list.length; i++) {
    const separatedExt = list[i].split('.')[1];

    if (separatedExt === extension) {
      console.log(`${list[i]}`);
    }
  }
});
