const express = require('express');
const { PORT } = require('./config');
const htmlRouter = require('./routes/htmlRouter');
const apiRouter = require('./routes/apiRouter');
const sequlizeConnection = require('./connection');

const server = express();

server.use(express.static('public'));
server.use(express.json()); // Look for requests that have the Content-type: application/json header
server.use(express.urlencoded({ extended: true}))

server.use('/api', apiRouter);
server.use(htmlRouter);





server.listen(PORT, () => {
  console.log(`Server listeniong on port ${PORT}`);

  sequlizeConnection.sync();

});