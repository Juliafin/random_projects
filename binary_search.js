

function binarySearch(arr, num) {
  console.log('arr', arr)
  console.log('num', num)
  let low = 0;
  let high = arr.length - 1;
  let mid;
  while ( high >= low) {
    
    mid = (high + low) / 2 ;
    console.log(low, arr[low], mid, arr[mid], high, arr[high])

    if (arr[mid] === num) {
      return mid;

    } else if (arr[mid] > num) {
      high = mid - 1;

    } else {
      low = mid + 1;

    }
  }
  return -1;
}


const inOrder = (a, b) => {
  if (a < b) {
    return -1
  } else if (a > b) {
    return 1
  }
  return 0;
}

let arr2 = [7, 1 ,2 ,8 ,10]

console.log(binarySearch(arr2, 10))
