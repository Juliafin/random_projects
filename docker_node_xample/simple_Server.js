var http = require('http');




var http = require('http');

var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<h1 style="color:purple">Helllllloo!</h1>');
  res.end();
});


server.listen(9001);