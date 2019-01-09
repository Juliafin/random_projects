
function OurPromise(cb) {
  this.status = 'deferred';
  this.value = null;

  // Two methods to set the above values
  this.setValue = function(value) {
    this.value = value;
  };
  this.setStatus = function(status) {
    this.status = status;
  };

  this.setValue = this.setValue.bind(this);
  this.setStatus = this.setStatus.bind(this);
  

  this.resolve = function(value) {
    this.setValue(value);
    this.setStatus('resolved');
    console.log('this.status', this.status);
    console.log('this.value', this.value);
  };
  
  this.reject = function(value) {
    this.setValue(value);
    this.setStatus('rejected');
  };

  this.resolve = this.resolve.bind(this);
  this.reject = this.reject.bind(this);

  this.cb = cb;

  this.then = function (then_cb) {
    if (this.status == 'resolved') {
      then_cb(this.value);
    } else {
      let err = new Error('Something went wrong');
      throw err;
    }
  };

}


let p2 = new OurPromise(function(resolve, reject) {
    resolve('hellooooooooooooooooooo');

});


console.log(p2.status);
console.log(p2.value);

p2.then(function(value) {
  console.log('p2.then: ', value);
});



let p1 = new Promise(function(resolve, reject) {
  resolve([1,2,3,4,5]);
});

console.log(p1);

p1
  .then(function (resolvedValue) {
    console.log('Here is our resolved value!:');
    console.log(resolvedValue);
  });
