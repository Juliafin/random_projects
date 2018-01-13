const mongoose = require('mongoose');


const inputSchema = mongoose.Schema({
  input: {
    type: String
  }
})


var Input = mongoose.model('input', inputSchema);

module.exports = Input;