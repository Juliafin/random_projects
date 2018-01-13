const express = require('express');
const server = express();
const PORT = '9001'
const tweetRouter = require('./routes/tweetRoutes');
const Tweet = require('./models/twitterModel');

server.use(express.static('public'))
server.use('/tweets', tweetRouter);

server.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
})

server.listen(PORT, () => {
  console.log(`Our server is running on Port ${PORT}`);

  Tweet
    .sync()
    .then(() => {
      console.log('Table Synced');
    })

});