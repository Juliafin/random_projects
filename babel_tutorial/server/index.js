import test from './test.js';


test('BABEL IS Still WORKING');
console.log('even more code;')
test('Production is still working!')

test('hello there!')
test('how are you!')


function wrapPromise(value, time, condition=true) {
  return new Promise( (resolve, reject) => {
    setTimeout( () => {
      if (condition) {
        resolve(value)
      } else {
        reject(`The promise with value ${value} failed.`)
      }
    }, time)
  }) 
}


async function values() {
  let hello = await wrapPromise("hello", 200);
  console.log(hello);
  let howareyou = await wrapPromise('How are you',2000);
  console.log(howareyou);
  let failure = await wrapPromise('this will fail', 5000, false)
  failure
  .then( () => console.log('hello'))
  
} 

values()
.catch ( () => {
  console.log('hello there was a failure!')
})