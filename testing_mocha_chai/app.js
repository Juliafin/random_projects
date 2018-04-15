function sum (num1, num2) {
  if (!isNaN(num1) && !isNaN(num2) ) {
    
    return num1 + num2
  } else {
    throw new Error('One of the numbers is not a number');
  }
}

module.exports = sum;

