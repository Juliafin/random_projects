var loop = 0;
function isSorted(arr) {
  var isArrSorted = true;
  for (let i = 0; i < arr.length; i++) {
    loop++;
    if (arr[i] > arr[i+1]) {
          isArrSorted = false;
      }
  }

  return isArrSorted

}

function anotherSort(arr) {
  
  var pointer1 = 0;
  var pointer2 = 1;
  // variable to keep track if array is sorted
  var sorted = false;

  while (!sorted) {
    loop++;
    // Logging to see how the arr changes over time
    console.log(arr)
      var num1 = arr[pointer1];
      var num2 = arr[pointer2];
      if (num1 > num2 ) {
          var temp = num1;
          arr[pointer1] = num2;
          arr[pointer2] = temp;
      }
      
      if (pointer2 === arr.length - 1) {
          pointer1 = 0;
          pointer2 = 1
          // If we've reached the end of the array, check if the array is sorted
          sorted = isSorted(arr)
      } else {
          pointer1++;
          pointer2++;
      }

      
  
  }
  return arr

}

var arr = [2,3, 5, 3, 36, 3, 2, 23, 3]

console.log(anotherSort(arr))
console.log(loop)
