/* 

 **Word**: Used to create an object representing the current word the user is attempting to guess. This should contain word specific logic and data.
*/

function Word (word) {
  this.word = word || "";

  this.guessedWord = ""
  this.currentIndex = 0;

  this.addletter = function (letter) {
    var newLetter = new Letter(letter)
    // do validation
    if (newLetter.le)
  }
  // if validation passes....
  this.guessedWord += newLetter.letter;
  this.currentIndex += 1;

}

var someword = new Word()

someword.addletter()

someword.guessedWord = 