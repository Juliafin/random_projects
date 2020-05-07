const mongoose = require('mongoose');

const addressBookModel = new mongoose.Schema({


  telephoneNumber: {
    type: String,
    match: [/^\d{3}-\d{3}-\d{4}$/],
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  zipCode: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  }

});


const AddressBook = mongoose.model('Address', addressBookModel);

module.exports = AddressBook;