var someObject = {
  a: 3, 
  b: 4, 
  c: "Hello",
  d: {
    z: "Inner"
  }
};

// console.log(someObject.a);
// console.log(someObject.c);
// console.log(someObject.d);
// console.log(typeof(someObject.d));

// if (typeof(someObject.d.z) === "object") {
//   console.log('Its an object!')
// }



var person = {
  firstName: "Jackie",
  lastName: "Thor",
  address: {
    houseNumber: 152,
    street: "Main St.",
    zipCode: 58231,
    state: "TN",
  }
}
  
  
  
  
  // var state = person.address.state; // "Tn " === STRING
  //          console.log(typeof(person), "person");  // OBJECT
  //          console.log(typeof(person.address), "person.address");  // OBJECT
  //          console.log(typeof(person.address.houseNumber), "person.address.houseNumber") // NUMBER
  // console.log(state);













// constructor function, we capitalize by convention to indicate that this function will output similiar objects
function Person (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = this.firstName + " " + this.lastName
  this.address = {};

  this.setAddress = function (houseNumber, streetname, zipcode, state, city) {
    this.address.houseNumber = houseNumber;
    this.address.streetname = streetname;
    this.address.zipCode = zipcode;
    this.address.state = state;
    this.address.city = city;
  }

  this.displayAddress = function () {
    console.log(this.fullName + " lives at " + this.address.houseNumber + " " + this.address.streetname + " " + this.address.city + ", " + this.address.state + " " + this.address.zipCode + ".");
  }

}


var person1 = new Person("Valerie", "Johnson");
console.log(person1); 
console.log(person1.fullName);



var person2 = new Person ("Todd", "Xi");
console.log(person2);
console.log(person2.fullName);


person2.setAddress(537, "Trail lake", 57125, "NJ", "Middletown" );

console.log(person2, 'person 2 after running setaddress function');


person2.displayAddress();
