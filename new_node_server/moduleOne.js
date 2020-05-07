
// import our array from data.js
var nameAndAgeData = require('./data/data');

// import our function to average the ages from utility.js
var averageTheAges = require('./utility/utility');

console.log(nameAndAgeData, 'Here is our list of names and ages');


// filter the array for names of Jonathan and ages more than 30
var filteredArray = nameAndAgeData.filter(function(element){
  if (element.name === "Jonathan" || element.age > 30) {
    return element;
  }
})

console.log(filteredArray, 'filtered array!')

// call the average function and average the ages from our data
var averagedAges = averageTheAges(nameAndAgeData);

console.log(`The average of the ages is: ${averagedAges}`);