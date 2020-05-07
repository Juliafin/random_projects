function sum (num1, num2) {
  if (typeof(num1) === 'number' && typeof(num2) === 'number') {
    return num1 + num2;
  } else {
    return 0;
  }
}


module.exports = sum;
