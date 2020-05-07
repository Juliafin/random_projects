class Calculator {

  constructor(x, y) {


    this._x = x;
    this._y = y;
    this._nums = []
  }

  set nums(num) {
    if (num === 0) {
      this._nums = [];
      return;
    }
    this._nums.push(num);
  }

  get x() {
    return this._x;
  }

  set x(newValue) {
    this._x = newValue;
  }

  get y() {
    return this._y;
  }

  set y(newValue) {
    this._y = newValue;
  }

  sum() {
    let total;
    if (this._nums.length) {
      total = this._nums.reduce((accumulator, num) => accumulator + num, 0);
    } else {
      total = this._x + this._y;
    }
    console.log(total);
  }

  subtract() {
    let total;
    if (this._nums.length) {
      total = this._nums.reduce((accumulator, num) => accumulator - num, 0);
    } else {
      total = this._x - this._y;
    }
    console.log(total);
  }

}

let calc1 = new Calculator(10, 5)

calc1.sum()
calc1.subtract()
// console.log(calc1.x)

// calc1.x = 20;
// console.log(calc1)

calc1.nums = 4;
calc1.nums = 32;
calc1.nums = 87;
calc1.nums = 19;
calc1.nums = 2;
calc1.nums = 57;
calc1.nums = 1000;
console.log(calc1)
// calc1.sum();
// calc1.subtract();
calc1.nums = 0;
console.log(calc1)
calc1.sum();

let calc2 = new Calculator(100, 200)
calc2.subtract();