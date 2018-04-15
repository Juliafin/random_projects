function sum (num1, num2) {
  // handle errors
  var isNumber = new RegExp(/^-?[0-9]*\.?[0-9]*$/)
  if (isNumber.test(num1) && isNumber.test(num2)) {
    
    return parseInt(num1) + parseInt(num2);
  } else {
    throw new Error('The values provided were not numbers');
  }

};


module.exports = sum;
