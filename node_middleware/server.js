const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = '8080';


//Middleware
function incrementOne(req, res, next) {
  if (req.body.num) {
    req.body.num++;
  }
  next();
}

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));
app.use(incrementOne); // apply middleware to ALL routes

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/incr', incrementOne, (req, res) => {
  console.log(req.body, 'REQ BODY');
  res.json(req.body);
});

app.post('/increment', (req, res) => {
  res.json(req.body);
});

app.post('/echoBack', (req, res) => {
  res.json(req.body);
});







app.listen(PORT, () => {
  console.log(`The server is listening on port ${PORT}`);
})





