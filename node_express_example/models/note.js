const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true
  },
  note: {
    type: String,
    required: true
  }
});


const Note = mongoose.model('note', noteSchema);

module.exports = Note;

