function appendToEndAndBeginningArray(array, elementToAppend) {
  
  if (!Array.isArray(array)) {
    throw new Error('The first argument must be an array');
  }
  
  var arrCopy = array.slice();
  arrCopy.unshift(elementToAppend);
  arrCopy.push(elementToAppend);
  return arrCopy;
}


module.exports = appendToEndAndBeginningArray;