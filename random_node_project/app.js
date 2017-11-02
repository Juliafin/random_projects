
var {sum, subtract, divide, multiply} = require('./module1') // the path './module1.js' also works

console.log('hellow world')


// subtract(3,1)
// sum(2,5)
// sum(2123,1254091)
// sum(12378,-5123125)
// multiply(583,12)
// divide(23,15)

sum(5,10, parseInt(process.argv[2]))

// console.log(process.argv);