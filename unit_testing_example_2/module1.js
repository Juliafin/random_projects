function sum (n1, n2) {
  // check if n1 and n2 are numbers

  if (!parseFloat(n1) && !parseFloat(n2)) {
    throw new Error("Both parameters are not numbers");
  }



  return n1 + n2;
}

module.exports = sum;