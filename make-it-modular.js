'use strict';
const mymodule = require('./mymodule');

const path = process.argv[2];

const extension = process.argv[3];

const callback = (err, data) =>
  err
    ? console.log("There's an error")
    : data.map(element => console.log(element));

mymodule(path, extension, callback);
