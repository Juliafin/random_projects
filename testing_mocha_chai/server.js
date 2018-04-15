const express = require('express');
const bodyParser = require('body-parser');
const Port = process.env.PORT || '9001';

const app = express();


app.get('/', (req, res) => {
  res.json({message: "Hello world", value: 6});
})


const server = app.listen(Port, () => {
  console.log(`Our server started on port ${Port} `);
})




module.exports = server;