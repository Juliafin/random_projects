var number1 = require('./module');
var sum = require('./module2');
var arrOfPeople = require('./module3');
var flattenedArr = require('./lodashModule')
console.log('hello')
console.log('here is number from module.js', number1);
//require.js libary

console.log(sum(number1, 100))


console.log(flattenedArr)


var averageAge = arrOfPeople.reduce(function(accum, element) {
  console.log('accum', accum)
  console.log('element', element)
  return accum + element.age

}, 0) / arrOfPeople.length

console.log(averageAge)