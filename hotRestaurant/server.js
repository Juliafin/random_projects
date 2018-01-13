const express = require('express');
const bodyParser = require('body-parser');

// creates an instance of our express app, creating the server
const server = express();

console.log('hello');
console.log('how are you?');
console.log(__dirname, '__dirname');

// body parser makes the req.body readable
server.use(bodyParser());
server.use(bodyParser.json());


var tables = 5;

server.post('/reservation', (req, res) => {
// the req.body is where we get data from our data field in the ajax call on the front end
  console.log(req.body, 'req.body');
  tables -= 1;
  console.log(tables, 'tables');
  return res.json({
    message: "request received, here is the data back",
    number: req.body
  })
});


server.get('/restaurant', (req, res) => {
                    // folder path to the file we're sending
  return res.sendfile(__dirname + '/public/index.html');
});

            //localhost:port (or wherever our server is installed) / test
server.get('/test', (req, res) => {
  return res.send('Why how marvelous that our server is running!');
})



server.listen('18080', () => {
  console.log('Server started on port 18080.')
})
// localhost:18080 (in the browser)