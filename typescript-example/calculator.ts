console.log('hi');

function sum (n1: number, n2: number): number {
  return n1 + n2;
}

const result = sum(2, 12);

interface IAddress {
  city: string;
  state: string;
  zipCode: number;
}

interface IPerson {
  name: string;
  age: number;
  hobbies: string[];
  address?: IAddress
}

interface IProfession extends IPerson {
  profession: string;
}


function Person (name: string, age: number, hobbies: string[]): IPerson {
  const address: IAddress = {
    city: 'New York',
    state: 'CA',
    zipCode: 5000
  }
 return {
   name,
   age,
   hobbies,
   address
 }
}


const introduce = (person: IProfession) => {
  const {name, age, hobbies} = person;
  console.log(`Hello my name is ${name}. I am ${age} years old. My hobbies are ${hobbies.join(",")}`)
}

const person = {
  name: 'Daniel',
  age: 50,
  hobbies: ['painting', 'dancing', 'computer science'],
  profession: 'Engineer',
};
introduce(person)

console.log(person?.address?.city);


