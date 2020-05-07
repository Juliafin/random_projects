const mongoose = require('mongoose');


const user = new mongoose.Schema({

  username: {
    type: String,
    required: true,
    unique: true,
    match: [/\d+/, "username must have a number"]
  },
  pass: {
    type: String,
    required: true
  },
  age: {
    type: Number
  },
  interests: [
    {
      hobby: {
        type: String
      }
    }

  ]
})


const User = mongoose.model('user', user);

module.exports = User;