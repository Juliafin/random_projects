/* 
1. Loop through the string
2. Check each char: if the char = "a" through "m"
  2a. Generate an array of letters a through m
3. Variable to store the number of errors
4. return a string with the number of errors concatenated with the / + length of the string.
*/

function printerError(s) {
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



// For loop that counts down from 100 to 0

for (var i = 100; i !== -1; i-- ) {
  console.log(i)
  break;
};

// Zigzag - 0 -> 2 -> 1 -> 3 -> 2 -> 4 -> 3 -> 5 -> 4 ..... until 100
function printZigZag(stopNumber) {
  var counter = 0;
  var printedString = '0 -> ';
  var skip = true;
  while(true) {
    
    if (skip) {
      counter += 2;
      skip = false;
    } else {
      counter--;
      skip = true;
    }

    if (counter === stopNumber) {
      printedString += counter;
      break;
    } else {
      printedString += `${counter} -> `;
    }
    }
  
    console.log(printedString);

}

printZigZag(212)








