var _a;
console.log('hi');
function sum(n1, n2) {
    return n1 + n2;
}
var result = sum(2, 12);
function Person(name, age, hobbies) {
    var address = {
        city: 'New York',
        state: 'CA',
        zipCode: 5000
    };
    return {
        name: name,
        age: age,
        hobbies: hobbies,
        address: address
    };
}
var introduce = function (person) {
    var name = person.name, age = person.age, hobbies = person.hobbies;
    console.log("Hello my name is " + name + ". I am " + age + " years old. My hobbies are " + hobbies.join(","));
};
var person = {
    name: 'Daniel',
    age: 50,
    hobbies: ['painting', 'dancing', 'computer science'],
    profession: 'Engineer'
};
introduce(person);
console.log((_a = person === null || person === void 0 ? void 0 : person.address) === null || _a === void 0 ? void 0 : _a.city);
