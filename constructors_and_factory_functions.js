

// factory function
function PersonFactory (name, age, favoriteColor) {
  return { 
    name: name,
    age: age,
    favoriteColor: favoriteColor,
    printPerson: function() {
      console.log(` Hello, my name is ${this.name}, and my age is ${this.age} and my favorite color is ${this.favoriteColor}.`)
    }

  }

}

var jackie = PersonFactory("Jackie", 25, "red");
jackie.printPerson()
console.log(jackie)



// constructor pattern

function PersonConstructor (name, age, favoriteColor) {
  this.name = name;
  this.age = age;
  this.favoriteColor = favoriteColor;
  this.interests = []
  this.printPerson = function () {
    console.log(` Hello, my name is ${this.name}, and my age is ${this.age} and my favorite color is ${this.favoriteColor}.`)    
  }
  this.addInterest = function(interest) {
    this.interests.push(interest);
  }
  
}



// Array.prototype.doubleNumbers = function() {
//   return this.map(function(element) {return element * 2})
// }

// var arr = [1,2,3,4]

// arr.doubleNumbers();
// console.log(arr)



PersonConstructor.prototype.eyeColor = "blue";
var suzie = new PersonConstructor("suzie", 50, "pink");
suzie.printPerson()
suzie.addInterest('painting');
suzie.addInterest('skiing');
suzie.addInterest('hangliding');
suzie.addInterest('cooking');
console.log(suzie.eyeColor, 'suzie before the eyecolor change');

suzie.eyeColor = "brown"
console.log(suzie.eyeColor, 'suzie after the eyecolor change');

