//impure function changes the value of variables outside of it's scope. AKA side effects
//1. Pure function example
var x = 0;


function incrementX() {
  x++;
}

incrementX();

console.log(x);



//pure function - 1. does not alter global variables. 2. Always produces a consistent result

//2. Impure function example
function incrementY(y) {
  return ++y;
}

console.log(incrementY(10));

var z = 100;

console.log(incrementY(z));









//scope
//3. Scope example 1

function returnN(n) {
  return n;
}


returnN("hello");

// console.log(n); // variable 'n' is defined inside of the scope of ReturnN



//when we have a return statement, we access the value by assigning it to a variable:



var result = returnN('hello italy');
console.log(result);




//4.Scope example 2


var greeting = "hello";


function printGreeting() {
  console.log(greeting);
}


printGreeting();





//5.Scope example 3


var goodbye = "goodbye";


function printGoodbye() {
  var goodbye = "Arrivaderci"; // initializing a variable locks it to the scope that it's initalized in
  console.log(goodbye);
}

printGoodbye()



//6.Scope example 4


function printPerson() {
  person = {
    name: "Janette"
  } // person is unitialized!! therefore it is hoisted to the global scope (as if declared in the global scope)
  console.log(person, 'inside function');
}

printPerson();
console.log(person, 'outside function');




//7.Pass by reference example 1


var animal = {
  name: "Fluffy",
  type: "cat"
};


function turnCatsToDogs(anim) {
  anim.type = "dog";
  console.log('animal inside the function', anim);
};



turnCatsToDogs(animal);
console.log('animal outside the function', animal); // animal changes because the object that is passed into the function is stored by reference


//8.Pass by reference example 2


var color = "red";

function changeToBlue(cL) {
  cl = "blue";
  console.log('cl', cl);
}

changeToBlue(color); 
console.log('color', color); // color does not change because the variable color is stored by value 