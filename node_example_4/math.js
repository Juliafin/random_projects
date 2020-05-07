var lodash = require('lodash');
var moment = require('moment');

var colors = ["red", "green", "blue", "orange", "yellow"];

var shuffledColors = lodash.shuffle(colors);

console.log(shuffledColors);


var today = moment().format("LLLL");
console.log(today);

