var names = require('./names');
var colors = require('./colors');
var add = require('./calculator').add;

console.log(`Hi, I am ${process.env.CAT} and I am a ${process.argv[2]} cat!!`);
// console.log(process.argv)
// console.log('Hello ' + name + '!');

names.forEach(function(name, index) {
  console.log(`Hello, I am ${name} and my favorite color is ${colors[index]}!`);
});



console.log(add(100, Math.PI));




