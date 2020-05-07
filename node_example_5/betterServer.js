const express = require('express');
const server = express();
const lodash = require('lodash');

server.use(express.json());
server.use(express.urlencoded({extended: true}));

server.get('/', function(request, response) {
  response.sendFile(__dirname + '/index.html');
});

server.post('/processText', function(request, response) {
  console.log(request.body, 'body');

  const processedText = lodash.countBy(request.body.text.split(''), function(character) {
    return character;
  })

  response.json({
    message: 'This is the process text route!',
    processedText
  });
});


server.listen(10001, function() {
  console.log('Server is listening on port 10001 ®');
});


