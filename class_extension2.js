class Person {
  // specially defined init method that all classes use to instantiate themselves
  constructor(name, age, favoriteColor) {
    console.log(`The constructor has been called with ${name}, ${age}, ${favoriteColor}`);
    this.name = this.setValue(name, 'Name');
    this.age = this.setAge(age);
    this.favoriteColor = this.setValue(favoriteColor, 'favoriteColor');
  }

  setValue(name, argumentName = '') {
    if (typeof (name) === 'string' && name !== '') {
      return name;
    } else {
      throw new Error(`This is not a valid ${argumentName}!`);
    }
  }



  setAge(age) {
    if (typeof (age) === 'number' && age % 1 === 0) {
      return age;
    } else {
      throw new Error('This is not a valid age!');
    }
  }


  getOlder() {
    this.age++;
    console.log(`${this.name} has aged to ${this.age}`);
  }


}

// let robert = new Person('Robert', 37, 'Green');
// console.log(robert);
// robert.getOlder()
// console.log(robert);



class Fighter extends Person {
  constructor(name, age, favoriteColor, weapon) {
    super(name, age, favoriteColor);
    this.weapon = this.setValue(weapon, 'weapon');
    this.STR = Math.floor(Math.random() * 10) + 5;
    this.DEF = Math.floor(Math.random() * 10) + 5;
    this.hitpoints = 100;
  }



  attack(character) {
      console.log('This character is an instance of a Fighter');
      let damage = -1
      while (damage < 0) {
        // console.log(this.STR);
        // console.log(character.DEF);
        // console.log(Math.ceil(Math.random() * 10));
        damage = this.STR - character.DEF + Math.ceil(Math.random() * 10);
        console.log(damage, 'damage');
      }
      console.log(`${this.name} attacks ${character.name} with a ${this.weapon} for ${damage} points.`);
      character.hitpoints -= damage;
    }
  

  
  powerup() {
    console.log(`${this.name}'s ${this.weapon} glows ${this.favoriteColor}`);
    this.STR += Math.ceil(Math.random() * 10);
  }
  
}

let rohnin = new Fighter('Rohnin', 25, 'red', 'sword');
let barb = new Fighter('Barb', 28, 'green', 'axe');

console.log(rohnin);
console.log(barb);

// rohnin.attack(barb)
// barb.attack(rohnin)
// rohnin.powerup()
// rohnin.attack(barb)
// barb.powerup()
// barb.attack(barb)
// console.log(rohnin);
console.log(barb);


var obj1 = {hitpoints: 100, name: "hello", DEF: 2};
barb.attack(obj1);
console.log(obj1);
