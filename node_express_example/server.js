const express = require('express');
const { MONGO_URL, PORT } = require('./config');
const router = require('./routes');
const mongoose = require('mongoose');

const server = express();

server.use(express.json())
server.use(router);

server.get('/test', (req, res) => {
  res.set({
    'test': 'hi',
    'howareyou': 'itshere',
    'Feature-Policy': 'accelerometer'

  })

  res.json({
    message: 'hi'
  })
})

const connectToMongoose = () => {
  mongoose.connect(MONGO_URL)
}


server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
  connectToMongoose();
})