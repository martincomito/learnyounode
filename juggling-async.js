'use strict';
const http = require('http');
const bl = require('bl');
let responseArray = [],
  count = 0;

function httpGet(index) {
  http.get(process.argv[2 + index], response => {
    response.pipe(
      bl((err, data) => {
        if (err) {
          return console.error(err);
        }
        responseArray[index] = data.toString();
        ++count;
        if (count === 3) {
          responseArray.map(url => console.log(url));
        }
      })
    );
  });
}

for (let index = 0; index < 3; index++) {
  httpGet(index);
}
