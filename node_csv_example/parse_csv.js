const fs = require('fs');


var fileData = fs.readFileSync('./MOCK_DATA.csv', 'utf-8').trim();
// console.log(fileData)

// console.log(typeof(fileData))

console.log('Hello \n This is on a new line');

var nameListArr = fileData.split('\n');
var colors = ['red', 'green', 'blue', 'yellow', 'orange'];

nameListArr = nameListArr.map(function(line, index) {
  var colorIndex = index % 5;
  var color = colors[colorIndex]
  line = line.split(',');
  var firstName = line[1];
  var lastName = line[2];
  var email = line[3];
  var paragraphHtml = `<p style="color:${color}">My name is ${firstName}, ${lastName} and my email address is ${email}.</p>`;
  // console.log(paragraphHtml);
  return paragraphHtml;

}).join("");

console.log(nameListArr);

module.exports = nameListArr;