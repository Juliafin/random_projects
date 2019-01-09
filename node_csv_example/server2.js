const http = require('http');
const nameList = require('./parse_csv');

var server = http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write(`<h1 style="color:purple">This text is purple!<h1/>${nameList}`);
  response.end();

});
const PORT = 9000;

server.listen(PORT, function() {
  console.log(`The server is listening on port ${PORT}.`)
});



// var obj = {}
// for (var i = 0; i < 10; i++) {
//   console.log(obj)
//   obj.i = i
// }

// console.log(obj);

