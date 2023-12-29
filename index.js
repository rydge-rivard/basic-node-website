let http = require("http");
let fs = require("fs");
const path = require("path");

http
  .createServer(function (req, res) {
    if (req.url === "/") {
      fs.readFile(
        path.join(__dirname, "public", "index.html"),
        function (err, data) {
          if (err) {
            res.writeHead(404, { "Content-Type": "text/html" });
            return res.end(fs.readFile("404 Not Found."));
          }
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
          return res.end();
        }
      );
    } else if (req.url === "/about") {
      fs.readFile(
        path.join(__dirname, "public", "about.html"),
        function (err, data) {
          if (err) {
            res.writeHead(404, { "Content-Type": "text/html" });
            return res.end(fs.readFile("404 Not Found."));
          }
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
          return res.end();
        }
      );
    } else if (req.url === "/contact-me") {
      fs.readFile(
        path.join(__dirname, "public", "contact-me.html"),
        function (err, data) {
          if (err) {
            res.writeHead(404, { "Content-Type": "text/html" });
            return res.end(fs.readFile("404 Not Found."));
          }
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
          return res.end();
        }
      );
    } else {
      fs.readFile(
        path.join(__dirname, "public", "404.html"),
        function (err, data) {
          if (err) {
            res.writeHead(404, { "Content-Type": "text/html" });
            return res.end(fs.readFile("404 Not Found."));
          }
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
          return res.end();
        }
      );
    }
  })
  .listen(8080);
