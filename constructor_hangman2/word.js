var Letter = require('./letter');


function Word(word) {
  this.gameWon = false;
  this.word = word;
  this.letters = [];
  this.lettersIncorrectlyGuessed = []

  this.initializeLetters = function () {
  
    for(let i = 0; i < this.word.length; i++) {
      let letter = this.word[i];
      this.letters.push(new Letter(letter))
    }
  }

  this.initializeLetters();

  this.renderDisplay = function () {
    let display = "";
    for (let i = 0; i < this.letters.length; i++ ) {
      let letterToDisplay = this.letters[i].getLetter();
      display += letterToDisplay + " ";
    }
    console.log(display);

  }

  this.checkLetterGuessed = function (guessedLetter) {
    for (let i = 0; i < this.letters.length; i++ ) {
      this.letters[i].checkLetter(guessedLetter)
    }
    this.checkWin()
  }

  this.checkWin = function () {
    let found = this.letters.find(function(letter) {
      if (letter.getLetter() === "_") {
        return letter.getLetter()
      }
    })

    if (!found) {
      // console.log('YOU WON!!!')
      this.gameWon = true;
    }
  }

}


let architecture = new Word('architecture');
// console.log(architecture);

// architecture.checkLetterGuessed('t')
// architecture.renderDisplay();
// architecture.checkLetterGuessed('e')
// architecture.renderDisplay();
// architecture.checkLetterGuessed('a')
// architecture.renderDisplay();
// architecture.checkLetterGuessed('r')
// architecture.renderDisplay();
// architecture.checkLetterGuessed('i')
// architecture.renderDisplay();
// architecture.checkLetterGuessed('c')
// architecture.renderDisplay();
// architecture.checkLetterGuessed('h')
// architecture.renderDisplay();
// architecture.checkLetterGuessed('u')
// architecture.renderDisplay();


module.exports = Word;