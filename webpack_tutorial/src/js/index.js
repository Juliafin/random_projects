require ('../css/style.css');
let $ = require('jquery');
let {people} = require('./module2');
var someValue = require('./module1');
console.log(people);
console.log(someValue);
console.log($);
function calc (num1, num2, func) {
  if (func === 'add') {
    return num1 + num2;
  } else if (func === 'subtract') {
    return num1 - num2;
  } else if (func === 'multiply') {
    return num1 * num2;
  } else if (func === 'divide') {
    return num1 / num2;
  } else {
    console.log('please provide a valid function')
  }
}

$.each(people, (key, value) => {
  $('.parent').append(`<h1>${people[key].name}</h1>`)
})

// var div1 = document.createElement('div').appendChild(document.createTextNode( (calc(2,2,'add')).toString() ))
// console.log(div1.outerHtml);

// var div2 = document.createElement('div').textContent = calc(2,2,'subtract')
// var div3 = document.createElement('div').textContent = calc(2,2,'divide')
// var div4 = document.createElement('div').textContent = calc(2,2,'multiply')


// console.log(div1.outerHtml)
// var parent = document.getElementsByClassName('parent')[0];

// parent.innerHTML = (div1.outerHtml + div2.outerHtml + div3.outerHtml + div4.outerHtml)
console.log(calc)

module.exports = calc