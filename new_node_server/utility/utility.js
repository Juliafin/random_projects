function averagetheAges(array) {
  var age = 0;
        //happens before all the loops          //checks if the loop should run                         //happens at the end of every loop
  for (let i = array.length-1; i > -1; i--) {
    age = age + array[i].age
  }
  return age / array.length ;

}

console.log('dirname inside of utility', __dirname);

module.exports = averagetheAges;