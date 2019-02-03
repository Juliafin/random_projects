/*
Stack - 
LIFO - Last in first out
*/


class Stack {
  constructor() {
    this.items = [];
  }

  insert(item) {
    this.items.unshift(item);
  }

  remove() {
    return this.items.shift();
  }

  get length() {
    return this.items.length;
  }

}


let st = new Stack()

st.insert("hi")
st.insert("How are you")
st.insert("My name is Julia")

let item = st.remove()
console.log(item)
let item2 = st.remove()
console.log(item2)

console.log(st.length)
let item3 = st.remove()
console.log(item3)




/* 
Queue 
FIFO - First in first out

1 => [1]
5 => [1, 5]
6 => [1, 5, 6]
*/


class Queue {
  constructor() {
    this.items = [];
  }

  insert(item) {
    this.items.push(item);
  }

  remove(item) {
    return this.items.shift();
  }

  get length() {
    return this.items.length;
  }
}



let q1 = new Queue()

q1.insert("red");
q1.insert("blue");
q1.insert("green");


let qItem1 = q1.remove()
console.log(qItem1)
let qItem2 = q1.remove()
console.log(qItem2)
let qItem3 = q1.remove()
console.log(qItem3)

