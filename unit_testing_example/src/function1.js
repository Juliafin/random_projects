function appendToEndAndBeginningArray(array, elementToAppend) {
  
  if (!Array.isArray(array)) {
    throw new TypeError('The first argument must be an array');
    // return [] alternate option for type consistency
  }

  if (typeof elementToAppend === 'undefined') {
    return array;
  }
  var arrCopy = array.slice();
  arrCopy.unshift(elementToAppend);
  arrCopy.push(elementToAppend);
  return arrCopy;
}

// appendToEndAndBeginningArray({}, 20)

var arr1 = [123, 345, 345, 456];
var result = appendToEndAndBeginningArray(arr1, 567)
console.log(arr1);
console.log(result);


module.exports = appendToEndAndBeginningArray;