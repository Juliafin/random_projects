const http = require('http');
const fs = require('fs');


const html = fs.readFileSync('./index.html');
console.log(http.METHODS);

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(html);
  res.end();
}).listen(9001);