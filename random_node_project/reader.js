const fs = require('fs')

var file = fs.readFileSync('random.txt', 'utf-8')

console.log(file.replace(/e/g), 'MOOOOOOOOOOOOOOO')