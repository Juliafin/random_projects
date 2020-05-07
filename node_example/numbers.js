var arr = new Array(100).fill("").map(function (element, index) {return index + 1;});

function divide (n1, n2) {
  return n1 / n2;
}


module.exports = {
  numbers: arr,
  divide
};

// console.log(module, 'module in numbers.js');