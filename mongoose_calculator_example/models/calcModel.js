const mongoose = require('mongoose');

// sample document
/* 

{
  number1: 5,
  number2: 10,
  operator: '+',
  result: 15
}

*/


const calculatorModel = new mongoose.Schema({

  number1: {
    type: Number,
    required : true
  },
  number2: {
    type: Number,
    required : true
  },
  operator: {
    type: String,
    required: true  
  },
  result: {
    type: Number,
    required: true
  }

})



const Calculator = mongoose.model('calc', calculatorModel);

module.exports = Calculator;