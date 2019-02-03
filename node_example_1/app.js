const fs = require('fs');

let file = fs.readFileSync(__dirname + "/ipsum.txt", 'utf-8');
console.log(file);


// fs.copyFileSync(__dirname + "/ipsum.txt", __dirname + "/ipsumcopy.txt");

module.exports = file;