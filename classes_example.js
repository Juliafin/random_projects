
// (Es5 Constructor)
function PersonConstructor (firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;

  this.introduce = function() {
    console.log('Hello my name is ' + this.firstName + ' ' + this.lastName);
  }
}

let michelle = new PersonConstructor('Michelle', 'Van der Hern', 35);

michelle.introduce()


// (Es6 Class)
class Person {
  constructor(firstName, lastName, age) {
    console.log(`Constructor called with ${firstName}, ${lastName}, ${age}`)
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }


  // This is a static method. It can be called on the class itself!
  static hello () {
    console.log('Hello!');
  }

  // This is a normal Es5 style function
  introduce() {
    console.log(`Hello my name is ${this.fullName}! `)
  }

  // This is an ES6 arrow function.
  growOlder = () => {
    this.age++;
    console.log(`${this.fullName} has aged to ${this.age}`);
  }


  get fullName () {
    // We can set custom properties that when accessed on an instance will call this function
    return `${this.firstName} ${this.lastName}`
  }

  set fullName (name) {
    // Take in a name like "Victor Lee"
    /* This is array destructuring. We are assigning variables 'firstName' to the first index of the array and 'lastName' to the second index of array
    
    another example:

    const [num1, num2] = [5, 10];
    console.log(num1) // 5
    console.log(num2) // 10


    */
    const [firstName, lastName] = name.split(" ");
    this.firstName = firstName;
    this.lastName = lastName
  }

}

Person.hello()

// Do not use arrow functions if setting prototypes of classes after the fact!
// This function when called will set the favorite color property on an instance of the class
Person.prototype.setFavoriteColor = function(color) {
  this.favoriteColor = color;
}

Person.prototype.announceFavoriteColor = function() {
  console.log(`${this.fullName}'s favorite color is ${this.favoriteColor}`)
}


// Calls the constructor
const Janet = new Person("Janet", "Jackson", 40)

Janet.introduce()
Janet.growOlder()

// This will call the setter function for fullName on line 33, passing in the assignment "Ricky Martin" as the parameter 'name' in that function
Janet.fullName = "Ricky Martin";

Janet.introduce()

Janet.setFavoriteColor('purple');

Janet.announceFavoriteColor();


class Profession extends Person {

  constructor(firstName, lastName, age, profession) {
    super(firstName, lastName, age);
    this.profession = profession
  }

  declareProfession() {
    console.log(`${this.fullName}'s profession is ${this.profession}.`);
  }

  introduce() {
    console.log(`Hello! I am ${this.fullName} and I am a ${this.profession}. I am ${this.age} years old and my favorite color is ${this.favoriteColor}`)
  }

}

let peter = new Profession("Peter", "Jackson", 20, "Moviemaker");
peter.setFavoriteColor("Green");
peter.declareProfession();
peter.introduce()

