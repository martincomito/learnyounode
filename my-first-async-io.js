'use strict';
const fs = require('fs');
const buffer = process.argv[2];

fs.readFile(buffer, (err, data) => {
  if (err) throw err;
  const lines = data.toString().split('\n').length - 1;
  console.log(lines);
});
