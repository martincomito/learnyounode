'use strict';

const fs = require('fs'),
  http = require('http'),
  file = fs.createReadStream(process.argv[3]),
  port = process.argv[2];

const server = http.createServer(function(req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' });

  file.pipe(res);
});
server.listen(port);
