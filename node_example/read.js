var fs = require('fs');
var lodash = require('lodash');
var csvFile = fs
  .readFileSync('./C2ImportCalEventSample.csv', 'utf-8').split('\n')
  .map(function(line) {
    return line.split(',');
  });

console.log(csvFile);