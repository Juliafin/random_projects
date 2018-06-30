console.log('hello')
console.log('I like sushi')
console.log('this is in master')

function sum(n1, n2) {
  try {
    throw new Error('this function errored')
    return n1 + n2
    console.log('Trying to throw an error');

  } catch (Error) {
    console.log('there was an error but we caught it!')
    return 10
  }
  console.log('inside sum')
}


var result = sum(2,5)
console.log(result)
