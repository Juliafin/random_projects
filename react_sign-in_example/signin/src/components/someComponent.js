
const somebody = {
  name: 'victor'
}

const anotherPerson = {
  name: 'Sam'
}


export { somebody as nobody }

export { anotherPerson }


export default function () {
  console.log('hi')
}