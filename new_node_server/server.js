// node way of creating a server

// var http = require('http')

// http.createServer()


// express - wraps node http processes (like how jquery wraps vanilla DOM api)

var express = require('express');

var ourServer = express();

var names = [];


ourServer.use(express.json())

// console.log(ourServer, 'this our express app object');

ourServer.get('/getNames', function(req, res) {
  res.json({
    names
  })
})

ourServer.post('/addName', function(request, response) {

  var name = request.body.name;

  if (!name) {
    return response.status(400).json({
      error: "Name must be provided"
    })
  }

  names.push(name);
  console.log(request.headers);

  response.status(201).json({
    message: "Added to names!",
    name: name

  })
});


ourServer.put('/changeName', function(request, response) {
  const name = request.body.name;
  const index = request.body.index;
  const oldName = names[index]
  names[index] = name;

  response.status(200).json({
    message: `${oldName} changed to ${name}`
  })

})

ourServer.delete('/deleteName', function(request, response) {

  const index = request.body.index;

  const oldName = names[index];

  names.splice(index, 1);

  response.json({
    message: `${oldName} has been deleted!`
  })
});


ourServer.get('*', function(request, response) {
  // the request object is what the client sent to our server

  // the response object is what we reply with

  // this sends the file to the client
  response.sendFile(__dirname + '/index.html')
})

const PORT = 9999;
console.log(__dirname, 'this is __dirname')

ourServer.listen(PORT, function () {
  console.log(`Hey everyone! Our express app is now running on port ${PORT}`);
});