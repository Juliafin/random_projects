var number1 = require('./module');
var sum = require('./module2');
var {name} = require('./module3');
var flattenedArr = require('./lodashModule')
console.log('hello')
console.log('here is number from module.js', number1);
//require.js libary

console.log(sum(number1, 100))

console.log(name)

console.log(flattenedArr)
