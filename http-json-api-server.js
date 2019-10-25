"use strict";

const http = require("http"),
  url = require("url");

const generateActualTime = (path, reqUrl) => {
  const parsedUrl = url.parse(reqUrl, true);
  const date = new Date(parsedUrl.query.iso);

  switch (path) {
    case "/api/parsetime":
      console.log("ENTREA PARSETIME");
      return {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds(),
      };

    case "/api/unixtime":
      console.log("ENTREA UNIXTIME");
      return date.getTime();
  }
};

const server = http.createServer(function(req, res) {
  let route = url.parse(req.url, true);
  let resCode = 404;
  let resHeaders = {};
  let response = null;

  if (req.method !== "GET") {
    resCode = 400;
    resHeaders = { "content-type": "text/plain" };
    response = "I´m expecting a GET request, try again!\n";
  }

  switch (route.pathname) {
    case "/api/parsetime":
      resCode = 200;
      resHeaders = { "content-type": "application/json" };
      response = generateActualTime(route.pathname, req.url);
      break;
    case "/api/unixtime":
      resCode = 200;
      resHeaders = { "content-type": "application/json" };
      response = {
        unixtime: generateActualTime(route.pathname, req.url),
      };
      break;
  }

  res.writeHead(resCode, resHeaders);
  return res.end(JSON.stringify(response));
});

server.listen(Number(process.argv[2]));
