let http = require('http');
let url = require('url');
let fs = require('fs');

  http.createServer(function (req, res) {      // Callback function for handling requests 
      let q = url.parse(req.url, true);
      let filename = "" + q.pathname;
      if (q.pathname === "/") {                 //user Zekimertincc's code, lines 8-14
        filename = "./index.html";
    } else if (q.pathname === "/about") {
        filename = "./about.html";
    } else if (q.pathname === "/contact-me") {
        filename = "./contact-me.html";
    }
  fs.readFile(filename, function(err, data){
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      return res.end("404 Not Found");
  }
  res.writeHead(200, {'Content-type' : 'text/html'});
  res.write(data);
  res.end()

});

}).listen(8080);