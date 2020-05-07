const express = require('express');
const bodyParser = require('body-parser');

const tweetRouter = express.Router();
const Tweet = require('./../models/twitterModel');


tweetRouter.use(bodyParser.json());
tweetRouter.use(bodyParser.urlencoded({extended: true}))
tweetRouter.get('/', (req, res) => {

  // connect to DB and send back our tweets to the client

  return Tweet
    .findAll()
    .then((tweets) => {
      // return tweets to client
      return res.json({tweets});

    })
    .catch((error) => {
      return res.status(500).json({message: "Internal server error"});
    })


});


tweetRouter.post('/', (req, res) => {
  // check if the req.body has author and tweet

  var missing = {};

  for (field in req.body) {
    if (!req.body[field]) {
      missing[field] = "Missing";
    }
  }
  
  // if the missing object has values, that means that some data is missing
  if (Object.keys(missing).length > 0) {
    return res.status(400).json({error: "Fields are missing", fields: missing})
  }

  return Tweet
    .create(req.body)
    .then((createdTweet) => {
      return res.json({created: createdTweet});
    })
    .catch((error) => {
      return res.status(500).json({message: "Internal server error"});
    })


})

module.exports = tweetRouter;