const express = require('express');
const bodyParser = require('body-parser');
const PORT = '9001';
const app = express();
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

function mongoDBConnection () {
  const connection = 'mongodb://localhost:27017';
  return mongoose.connect(connection);
}


app.listen(PORT, function () {

  console.log(`Our server is started on port ${PORT}`);
  mongoDBConnection()
    .then(function() {
      console.log('Mongoose connection is active');
    })
});

