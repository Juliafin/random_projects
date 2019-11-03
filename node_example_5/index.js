console.log('hello');

var lodash = require('lodash');

var someText = require('./module1/text');

var result = lodash.countBy([2.2, 2.1, 3.2, 3.9, 4.1, 4, 4.6, 9.3], function(element) {
  return Math.floor(element);
});

console.log(result)


console.log(someText);
console.log(someText.split(''));
const result2 = lodash.countBy(someText.split(''), function(character) {
  return character;
});

console.log(result2);