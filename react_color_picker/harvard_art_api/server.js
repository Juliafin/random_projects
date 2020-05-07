var http = require("http");
var fs = require('fs');

var file = fs.readFileSync("./index.html")


var server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(file);
  res.end();

});

server.listen(9001, function() {
  console.log("The server is now listening on port 9001");
})

