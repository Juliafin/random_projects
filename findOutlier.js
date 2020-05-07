function outlier(numArr) {

  var outlierFound = false;
  var counter = 0;
  var outlier;
  while (!outlierFound) {
    // terminating condition if reaching the end of the array
    if (counter === numArr.length) {
      break;
    }
    var num = numArr[counter];
    var numAfter = numArr[counter + 1] || 0;
    var numAfter2 = numArr[counter + 2] || 0;
    var sum = num + numAfter + numAfter2;

    if (sum % 2 !== 0) {
      console.log(`${num} + ${numAfter} + ${numAfter2} = ${sum}`)
      outlierFound = true;
      if ((num + numAfter2) % 2 === 0) {
        outlier = numAfter;
      } else if ((num + numAfter) % 2 === 0) {
        outlier = numAfter2;
      } else if ((numAfter2 + numAfter )) {
        outlier = num;
      }
    }
    counter++;
  }
  return outlier;
}


var result1 = outlier([2, 4, 0, 100, 4, 11, 2602, 36]);
var result2 = outlier([160, 3, 1719, 19, 11, 13, -21]);
var result3 = outlier([2, 4, 6, 8]);

console.log(result1, result2, result3)



function printer_error(s) {
  var validLetters = 'abcdefghijklm'.split('');
  var numberOfErrors = 0;
  for(var i = 0; i < s.length; i++) {
    var char = s[i].toLowerCase();
    if (validLetters.indexOf(char) === -1)  {
      numberOfErrors++;
    }
    
  }
  var output = `${numberOfErrors}/${s.length}`;
  return output;

}