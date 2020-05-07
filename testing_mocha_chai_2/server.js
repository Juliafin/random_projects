const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());


app.get('/', (req, res) => {
  // validate if user has access to this endpoint
  // invoke some model to do a find, then return the result

  res.json({message: "Success"});

});


app.post('/incrementOne', (req,res) => {
  req.body.num++;
  res.json({num: req.body.num});
});


const server = app.listen('8080', () => {
  console.log('Our server started on port 8080');
});


module.exports = server;