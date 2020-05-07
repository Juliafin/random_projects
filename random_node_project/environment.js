// console.log(process.env)
const dotenv = require('dotenv').config();



console.log(`My favorite food is ${process.env.FOOD}`);
console.log(`My favorite color is ${process.env.COLOR}`);

const operator = process.env.OPERATOR;


const environment = process.env.NODE_ENV;

if (environment === 'production') {

  switch(operator) {
  case '+':
    console.log("It's a plus!");
    break;
  case '-':
    console.log("It's a minus!");
  
  }
}



console.log(process.env.NODE_ENV);