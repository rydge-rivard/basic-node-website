let http = require("http");
let fs = require("fs");

http
  .createServer(function (req, res) {
    const fileName = "Pages/index.html";
    fs.readFile(fileName, function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);
