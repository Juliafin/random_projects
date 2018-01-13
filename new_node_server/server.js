// node way of creating a server

// var http = require('http')

// http.createServer()


// express - wraps node http processes (like how jquery wraps vanilla DOM api)

var express = require('express');

var ourServer = express();

// console.log(ourServer, 'this our express app object');

ourServer.get('*', function(request, response) {
  // the request object is what the client sent to our server

  // the response object is what we reply with

  // this sends the file to the client
  response.sendFile(__dirname + '/index.html')

})

console.log(__dirname, 'this is __dirname')
ourServer.listen('8080', function () {
  console.log('Hey everyone! Our express app is now running on port 8080');
});