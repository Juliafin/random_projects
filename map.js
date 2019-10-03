function calculator(numArray, operator) {
  return operator(numArray);
}

function add(numArray) {
  var sum = 0;
  for (let i = 0; i < numArray.length; i++) {
    sum += numArray[i];
  }

  // var sum = numArray.reduce((accum, element) => accum + element, 0);


  return sum;
}


function divide(numArray) {
  var divisionValue = numArray[1];
  for (let i = 0; i < numArray.length; i++) {
    if (i === numArray.length - 1) {
      break;
    }
    divisionValue = divisionValue / numArray[i + 1];
  }



  return divisionValue;
}


var result = calculator([32, 587, 29, 3.5], add);
var result2 = calculator([32, 587, 29, 3.5], divide);
console.log(result);
console.log(result2);


calculator([5, 39, 3], function(arr) {
  return (arr[0] / arr[1]) * arr[2];
});

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];


var remappedArr = arr.map(function (element, index, array) {
  if (index === array.length - 1) {
    return element + element + 1;
  } else {
    return element + array[index + 1];
  }

});
console.log(remappedArr);
console.log(arr);



Array.prototype._map = function (callback) {
  console.log('THIS', this);

  var that = this;
  var transformedArray = [];

  for (let i = 0; i < this.length; i++) {
    var element = this[i];
    var transformedValue = callback(element, i, that);
    transformedArray.push(transformedValue);
  }
  return transformedArray;

};

// var arr2 = [2, 5, 3, 8, 3, 1293];



var remappedArr2 = arr._map(function (element, index, array) {
  if (index === array.length - 1) {
    return element + element + 1;
  } else {
    return element + array[index + 1];
  }

});


console.log(remappedArr2);

console.log(typeof(arr));