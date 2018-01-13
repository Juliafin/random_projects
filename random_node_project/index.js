import arrayOfNames from ('./name.js');

// var lodash = require('lodash');
var $ = require('jquery');

var randomName = arrayOfNames[Math.floor(Math.random() * arrayOfNames.length)];

console.log('hello ' + randomName);

// console.log('IMPORTED THE LODASH LIBRARY!');
// console.log($);

