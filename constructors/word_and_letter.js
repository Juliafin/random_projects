function Word (word) {
  this.word = word;
  this.remainingGuesses = 10;
  this.index = 0;
  // this only happens when the constructor is instantiated!!
  this.currentLetter = this.word[this.index];
  
  this.setCurrentLetter = function () {
    this.currentLetter = this.word[this.index]
  }

  this.hiddenWord = function () {
    var wordString = "";
    for (let i = 0; i < this.word.length; i ++) {
      var letter = new Letter();
      wordString += letter.letter;
    }
    return wordString;
  }
  
  this.displayWord = this.hiddenWord();

  this.compareLetters = function (guessedLetter) {
    console.log('current index', this.index)

    // if the letter is correct
    if (guessedLetter === this.currentLetter) {
      // set the display word to the letter appearing there
      if (this.index === 0) {
        this.displayWord = this.currentLetter + this.displayWord.substr(1);
        this.index += 1;
      } else {
        var lettersbeforeguessedletter = this.displayWord.substr(0, this.index);
        console.log('letters before guessed letter',lettersbeforeguessedletter);
        console.log('current letter', this.currentLetter);
        var lettersafterguessedletter = this.displayWord.substr(this.index + 1);
        console.log("letters after guessed letter", lettersafterguessedletter)

        this.displayWord = this.displayWord.substr(0, this.index) + this.currentLetter + this.displayWord.substr(this.index + 1);
        this.index += 1;
      } 


    } else {
      // if the letter is wrong;
      this.remainingGuesses -= 1
    }

    
    // set the letter to the right index
    this.setCurrentLetter();
  }

}

var hello = new Word("hello");
console.log(hello);

var letterToGuess = new Letter("h");
hello.compareLetters(letterToGuess.letter)
console.log(hello)

var secondLetterToGuess = new Letter("e")
hello.compareLetters(secondLetterToGuess.letter);
console.log(hello);

var wrongLetter = new Letter("r")
hello.compareLetters(wrongLetter.letter);
console.log(hello)



function Letter(letter = "_") {
  
  this.letter = letter.toLowerCase();
  

};

var L = new Letter("L")
console.log(L);

var emptyLetter = new Letter()
console.log(emptyLetter)