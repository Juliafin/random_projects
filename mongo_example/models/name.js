
const mongoose = require('mongoose');


const name = new mongoose.Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  }

})


const Name = mongoose.model('name', name );

module.exports = Name;