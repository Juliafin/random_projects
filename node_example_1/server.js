const http = require('http');
const file = require('./app');

let server = http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"})
  response.write(`<div style="color: purple">${file}</div>`);
  response.end();
})

server.listen(9001, () => {
  console.log("Server is listening")
});