// Big O


/* 
1. O(1)

function FindArrayElement(array, index) {
  return array[index];

}






2. O(n)

  function sumArray(array) {
    
    var sum = 0
    for (let i = 0; i < array.length; i++) {
      sum += array[i]
    }

    return sum

  }


  }






3. O(log(n))


// LEFT [5,27]  RIGHT [12, 573, 2]
function merge(left, right){
    var result  = [],
        il      = 0,
        ir      = 0;

    while (il < left.length && ir < right.length){
        if (left[il] < right[ir]){
            result.push(left[il++]);
        } else {
            result.push(right[ir++]);
        }
    }

    return result.concat(left.slice(il)).concat(right.slice(ir));
}


// [5,27, 12, 573, 2]
function mergeSort(items){

    // Terminal case: 0 or 1 item arrays don't need sorting
    if (items.length < 2) {
        return items;
    }

    var middle = Math.floor(items.length / 2),
        left    = items.slice(0, middle),
        right   = items.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}



4. O(n^2)

  var array = [1,2,3,4,]

  var result = []

  for (let i= 0 ; i< array.length; i++) {
    
    for (let j=0; j < array.length; j++) {
      result.push(array[i] + array[j])

    }
  }

  console.log(result)








O (n ^ 3)

var array = [1,2,3,4,5,6,7,8,9,10]

  var result = []

  for (let i= 0 ; i< array.length; i++) {
    
    for (let j=0; j < array.length; j++) {

      for (let h = 0; h < array.length; h++) {

        for (let z = 0; z < array.length; z++) {
        result.push(array[i] + array[j] + array[h] + array[z])
      }

      }

    }
  }

  console.log(result)









5. O(n^m)

*/





function fibonacci(n) {
  
  if (n <1 ) {
    // count++;
    return 0


  } else {

    if (n <= 2) {
      // count++;
      return 1
    } else {
      // count++;
      return fibonacci(n - 1) + fibonacci(n - 2)
    }
  }
}

var result = fibonacci(7)
console.log(result)


function makeNestedObject(n) {
  
  if (n <1) {
    var obj = {};
    return obj
  } else {
    
    
  }

  return  {[n]: makeNestedObject(n-1)};


}

var obj = makeNestedObject(50)

console.log(obj)