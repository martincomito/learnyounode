'use strict';
const http = require('http'),
  map = require('through2-map'),
  port = process.argv[2];

const server = http.createServer(function(req, res) {
  if (req.method !== 'POST') return res.end('I only accept POST requests\n');
  req.pipe(map(chunk => chunk.toString().toUpperCase())).pipe(res);
});

server.listen(port);
