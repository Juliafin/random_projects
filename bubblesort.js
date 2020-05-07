/* 
1.  [3, 5, 1, 4, 8, 3, 20, 2 ]
     x  y

2. [3, 5, 1, 4, 8, 3, 20, 2 ]
       x  y
       
3. [3, 1, 5, 4, 8, 3, 20, 2 ]
          x  y

4. [3, 1, 4, 5, 8, 3, 20, 2 ]
             x  y

5. [3, 1, 4, 5, 8, 3, 20, 2 ]
                x  y
6. [3, 1, 4, 5, 8, 3, 20, 2 ]
                   x   y

7. [3, 1, 4, 5, 8, 3, 20, 2 ]
                       x  y

8. [3, 1, 4, 5, 8, 3, 2, 20 ]
                          x  y

*/

var unsortedArray = new Array(100).fill(null).map(function(element) {
  return Math.floor(Math.random() * 1000);
});

console.log(unsortedArray)


function bubblesort(arr) {
  var operations = 0;
  var cursorX = 0;
  var cursorY = 1;
  var arrLen = arr.length - 1;
  var arraySorted = false;

  while(!arraySorted) {
    operations++;
    // Reset to the beginning if we reach the 'end' of what is sorted
    if (cursorX === arrLen) {
      cursorX = 0;
      cursorY = 1;
      arrLen--;
    }

    var leftNum = arr[cursorX];
    var rightNum = arr[cursorY];

    if (leftNum > rightNum) {
      // if the number on the left is bigger than the right, switch places
      arr[cursorX] = rightNum;
      arr[cursorY] = leftNum;
    }

    if (arrLen === 1) {
      arraySorted = true;
    }


    cursorX++;
    cursorY++;

    // console.log(arr);
  }
  console.log('operations: ', operations);
  console.log(arr)
  return arr;
}

// bubblesort([3, 5, 1, 4, 8, 2, 7, 3, 20, 2 ]);
bubblesort(unsortedArray)


// Big O notation - evaluate the performance of algorithms

/* 
  function returnArrayValue(arr, index) {
    return arr[index];
  }
  
  O(1)


  function findAnElement(arr, elementToFind) {
    var elementFound = false;
    var index = 0;
    while(!elementfound) {
      if (index === arr.length) {
        break;
      }

      if (arr[index] === elementToFind) {
        return index;
      }
      index++;
    }
    return 'Element not found'
  }

  O(n) = linear growth   (x = y in worst case)



  function addEveryPair(arr) {
    var outputArray = []
    for (let i = 0; i< arr.length; i++) {
      
      for (let j = 0; j < arr.length; j++) {
        outputArray.push(arr[i] + arr[j]);
        
      }
    }
    console.log(outputArray)
    console.log(outputArray.length)
  }

  O(n ^ 2)
  
  addEveryPair([1, 2, 3, 4, 5, 7])

  
  
  */