const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const PORT = '9001';
const mongooseConnection = "mongodb://localhost:10001";
const Name = require('./models/name');

mongoose.Promise = global.Promise;

function connectToMongoose(connectionString) {
  console.log('connecting to the database')
  return mongoose.connect(connectionString)
}

// mongoose.connect('mongodb://username:password@host:port/database?options...');

// instance of our app (server)
const app = express();
const serverConnection = app.listen(PORT, () => {console.log(`Our server has listened on port ${PORT}`);})

app.use(bodyParser.json());

// Return all the documents
app.get('/', (req, res) => {
  console.log('Looking for names in the database');
  
  return Name
    .find()
    .then((names) => {
      return res.json({names})
    })
    .catch(() => {
      console.log('something went wrong looking for the names');
      return res.json(500, {error: 'Internal server error'});
    })
});

// Returns a document with the right id

app.get('/names/:id', (req, res) => {

  return Name
    .findById(req.params.id)
    .then((name) => {
      return res.json({message: "document found", name})
    })
    .catch(() => {
      console.log('there was an error finding the id');
    })

});



// Posts a document
app.post('/names', (req, res) => {
  const name = req.body;

  return Name
    .create(name)
    .then ((name) => {
      return res.json({name, message: 'The data has posted' })
    })
    .catch(() => {
      console.log('something went wrong posting the name');
      return res.json(500, {error: 'Internal server error'});
    })
})




connectToMongoose(mongooseConnection)
  .then(function() {
    console.log('connected to the mongoose database')    
    serverConnection
  })
  .catch(function(error) {
    console.log('the connection failed somewhere');
    serverConnection.close();
  })



