const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const {PORT, mongoURL} = require('./config');
const app = express();
const LemonadeInventory = require('./models/lemonade');



const lemonadeRouter = require('./controllers/apiRoute');



app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api', lemonadeRouter);




function connectMongo() {
  return mongoose.connect(mongoURL);
}


connectMongo()
  .then(() => {

    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });

    // return LemonadeInventory
    //   .create({sugar: 1, lemons: 1, water: 1});

  })
  
  .catch(() => {
    console.log('Something went wrong with the connection.');
  });






