const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
const path = require("path");

app.get("/", function (req, res) {
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
});

app.get("/about", function (req, res) {
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
});

app.get("/contact-me", function (req, res) {
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
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
