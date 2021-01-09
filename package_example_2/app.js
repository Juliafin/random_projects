var happyPackage = require('hi-this-is-a-happy-package-test');
var fs = require('fs');
console.log(happyPackage);
console.log(fs);
// var names = require('./names')
// var names = require('./names/index')
var names = require('./data/index.js')

console.log('This');

var lodash = require('lodash');

var diff = lodash.difference(names.names1, names.names2 )

console.log(diff);