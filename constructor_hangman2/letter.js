
function Letter(letter) {

  this.letter = letter;
  this.display = "_";
  this.checkLetter = function (letterToCheck) {
    if (letterToCheck.toLowerCase() === this.letter.toLowerCase()) {
      this.display = this.letter;

    } else {
      // console.log('the letters do not match');
      // keep of track of whether the letter has been guessed or not
    }
  }


  this.getLetter = function() {
    return this.display
  }


}



var lttr = new Letter('a');
// console.log(lttr);

lttr.checkLetter('A');

// console.log(lttr);


module.exports = Letter;