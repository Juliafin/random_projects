

// function Person (name) {
//   this.name = name
// }






class Person {
  
  constructor(name) {
    this.name = name;
    this.age = 20;
  }


  printName() {
    console.log("My name is: " + this.name)
  }

  
}
var mary = new Person('mary')


console.log(mary);

mary.printName()



class Scientist extends Person {

  constructor(name, field) {
    super(name);
    this.field = field;
    this.expertise = 1;
  }


  doResearch() {
    this.expertise++;
  }

}

const jonathan = new Scientist("Jonathan", "epidimielogist");
jonathan.printName()

jonathan.doResearch()
jonathan.doResearch()
jonathan.doResearch()
console.log(jonathan);