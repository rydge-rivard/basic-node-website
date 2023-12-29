let http = require("http");
let fs = require("fs");
let url = require("url");

http
  .createServer(function (req, res) {
    let q = url.parse(req.url, true);
    let filename = "." + q.pathname + ".html";
    fs.readFile(filename, function (err, data) {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end("404.html");
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);
