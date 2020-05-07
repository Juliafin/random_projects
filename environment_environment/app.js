// require('dotenv').config();


const fs = require('fs');

// What dotenv ACTUALLY does:
const environemtVariableFile = fs.readFileSync(__dirname + '/.env', 'utf-8').split("\n");
console.log(environemtVariableFile);
environemtVariableFile.forEach((variable) => {
  variable =  variable.replace("\r", "").split("=");
  console.log(variable);
  const key = variable[0];
  const value = variable[1];
  process.env[key] = value;

});

console.log(process.env);



// if (!process.env.FOOD) {
//   process.env.FOOD = 'Spaghetti'
// }



// import name from './module1'
// console.log('hi!');
const module1 = require('./module1');
// console.log(name);

// console.log(process, 'process');
// console.log(typeof(process), 'the type of process');
// console.log(Object.keys(process));

// console.log(process.memoryUsage());

// setTimeout(() => {}, 1000000);


console.log('process.env.SAYHI', process.env.SAYHI);
if (process.env.SAYHI === 'hi') {
  console.log('Hi world');
} else {
  console.log(`You didn't ask me to say hi!`)
}

console.log(process.env.HOMEPATH);




