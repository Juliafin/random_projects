function Letter (letter) {
  this.display = '_';
  this.letterGuessedCorrectly = false;
  this.letter = letter;
  this.letterAlreadyChecked = false;
// in the event that a space is passed into the letter, then logic for the constructor specifies that this letter is correctly guessed
if (letter === " ") {
  this.letterGuessedCorrectly = true;
  this.display = letter;
  this.space = true;
} else {
  this.space = false;
}

  // check the letter and if it's correct, then set the letter to be displayed
  this.checkLetter = function(letterGuessed) {
    //check if the letter has already run through this function and if it has, return
    if (this.letterGuessedCorrectly === true && !this.space ) {
      this.letterAlreadyChecked = true;
      return;
    }
    if (letterGuessed.toLowerCase() === this.letter.toLowerCase() && !this.space) {
      this.letterGuessedCorrectly = true;
      this.display = this.letter;

    }
  }

  


}




// test to see if it works

var k = new Letter('k');
console.log(k);

k.checkLetter('k');
console.log(k);

k.checkLetter('k');
console.log(k);






//export our Letter constructor
module.exports = Letter;