

function average (array) {

  var sum = 0;

  for (let index = 0; index < array.length; index++) {
    sum += array[index];    
  }

  return sum / array.length

}

var result1 = average([1,2,571823,91273,29222,-11125]);
console.log(result1)
var result2 = average([1,2,3,4,5]);
console.log(result2)


function avgEveryTwo(array) {
  var outputArray = [];
  for (let index = 0; index < array.length - 1; index++) {
    var subArray = array.slice(index, index+2);
    var avg = average(subArray);
    outputArray.push(avg);
    
  }
  return outputArray;
}

var averagingEveryTwo = avgEveryTwo([1,2,3,4,5,6])
var averagingEveryTwoV2 = avgEveryTwo([-1238,3728,1294,17582,123875,27381,52])
console.log(averagingEveryTwo)
console.log(averagingEveryTwoV2);