function sum (a,b, c=null) {
  if (c) {
    console.log(a + b + c, 'a+b+c')
    return a + b + c
  }
  console.log(a+b)
  return (a+b)
};

function multiply (a,b) {
  console.log(a*b)
  return (a*b)
};

function subtract (a,b) {
  console.log(a-b)
  return (a-b)

};

function divide (a,b) {
  console.log(a/b);
  return (a/b)
}


module.exports = {
  sum, divide, subtract, multiply
}