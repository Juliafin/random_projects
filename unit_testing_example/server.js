const express = require('express');
const bodyParser = require('body-parser');
const PORT = '8080';
const app = express();

app.use(bodyParser.json());



app.get('/', (req, res) => {
  return res.json({message:"hello", number:10, names:["Oscar", "Patty", "Jason", "Michelle", "Boris"]});
});


const server = app.listen(PORT, () => {
  console.log(`The server is listening on port ${PORT}`);
})

module.exports = server;


