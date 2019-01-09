const express = require('express');
const app = express();
const mongoose = require('mongoose');
const {PORT, MONGO_URL} = require('./config');
const htmlRouter = require('./routes/htmlRoutes');
const apiRouter = require('./routes/apiRoutes');
const path = require('path');
mongoose.Promise = global.Promise;


const staticPath = path.resolve(__dirname, './../client/build');
console.log(staticPath)
app.use('/', htmlRouter);
app.use('/api', apiRouter);
app.use(express.static(staticPath));





mongoose.connect(MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log('There was an error', err);
  });


