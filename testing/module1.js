function sum (num1, num2) {

  if (
      !isNaN(num1) && 
      typeof(num1) === 'number' && 
      !isNaN(num2) && 
      typeof(num2) === 'number') {
          return num1 + num2
      }
  else {
    throw new Error("Not a number")
  }

}


// console.log(sum([], []))

module.exports = sum;

