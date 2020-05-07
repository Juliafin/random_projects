var subtract = require('./module1').subtract
var names = require('./more_modules/module531');
var simpleSTCS = require('simple-statistics');


var numArray = [571,28391,3843,28761,92748];

console.log(simpleSTCS.mean(numArray))

// console.log(subtract(10, 5))


// console.log('The names of the people are ' + names.join(" ") + ' .');