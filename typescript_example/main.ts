
function sum (num: number = 5, num2 :number = 10) {
  return num + num2
}

sum (2, 2)
sum()


function returnArr (arr: string[] = ["hey", "how are you"]) {
  console.log(arr)
  return arr
}

returnArr()

enum Color {"red", "green", "blue"}


function printTarget(target) {
  console.log('this is the target', target)
}


class Greeter {
  greeting: string;
  constructor(message: string) {
      this.greeting = message;
  }

  @printTarget()
  greet() {
      return "Hello, " + this.greeting;
  }
}

