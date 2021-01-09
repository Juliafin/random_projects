const express = require('express');


const server = express();


server.use(express.static('client'));

server.use(express.urlencoded({extended: false}))
server.use(express.json());

server.post('/postSomewhere', (req, res) => {
  res.json({body: req.body})
});

server.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/index.html');
})


const PORT = 8080 || process.env.PORT;
server.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);

})