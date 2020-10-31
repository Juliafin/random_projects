const express = require('express');
const { PORT } = require('./config');
const htmlRouter = require('./routes/htmlRouter');
const server = express();

server.use(express.static('blog/build'));

server.use(htmlRouter);



server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
});



