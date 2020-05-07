const http = require('http');

let server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Heyyy how are you in Europe?')
  res.end()
})


server.listen(9001)