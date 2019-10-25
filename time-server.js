'use strict';

const net = require('net');

function timeRightNow() {
  let date = new Date();
  return `${date.getFullYear()}-${date.getMonth() +
    1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}\n`;
}

const server = net.createServer(function(socket) {
  socket.end(timeRightNow());
});
server.listen(process.argv[2]);
