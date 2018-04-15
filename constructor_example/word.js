//import Letter constructor
var Letter = require('./letter');


function Word(arrOfWords) {
  // The word to display to the user
  this.displayedWord = '';

  // The letters from the random word that contain the logic for whether they have been guessed or not
  this.letters = [];

  // the array of all the words that we are playing the game with
  this.arrOfWords = arrOfWords;

  // the list of letters that have been incorrectly guessed, later displayed to the user
  this.lettersGuessedIncorrectly = [];



  // the function to pick a random word out of our word array
  this.pickWord = function () {
    var index = Math.floor(Math.random() * this.arrOfWords.length);
    var randomWord = this.arrOfWords[index];
    // remove the random word from the array so it's not chosen again
    this.arrOfWords.splice(index, 1);


    this.randomWord = randomWord;
    this.remainingGuesses = this.randomWord.length;
  }

  



  // Sets the Letters into the Letter array
  this.initializeWord = function () {
    for (var i = 0; i < this.randomWord.length; i++) {
      // get each letter for the current word to be guessed
      var currentLetter = new Letter(this.randomWord[i]);
      this.letters.push(currentLetter);
      // 
    }
    this.setDisplay();
  }

  // Sets the letters to display
  this.setDisplay = function () {
    this.displayedWord = '';
    for (var i = 0; i < this.letters.length; i++) {
      var letterToDisplay = this.letters[i].display;
      this.displayedWord += letterToDisplay;
    }

    // console.log(this.randomWord.length, this.displayedWord.length);
  }


  // function to check the word against the letter being guessed

  this.checkWord = function (letterGuessed) {
    var letterMatched = false;

    for (var i = 0; i < this.letters.length; i++) {
      var currentLetter = this.letters[i];
      // run checkletter function against each letter constructor, if it matches, the Letter.letterGuessedCorrectly is set to true
      currentLetter.checkLetter(letterGuessed);
      // console.log(currentLetter.space, 'SPACE');
      //check if the letter has been guessed correctly, that the letter is not a space, and that the letter was not previous run through the checkLetter function before.
      if (currentLetter.letterGuessedCorrectly && !currentLetter.space && !currentLetter.letterAlreadyChecked) {
        letterMatched = true;
      }

    }

    // If the letterMatched is false, that means the letter guessed which has been tested on every letter of the word is incorrect. Therefore we decrement the remaining guesses, and push the letter into the array of letters that were guessed incorrectly
    // console.log(letterMatched, 'letter matched variable')
    if (!letterMatched) {
      this.remainingGuesses--;
      this.lettersGuessedIncorrectly.push(letterGuessed);
      // console.log(letterGuessed, 'letter guessed, no match');
      // console.log(this.lettersGuessedIncorrectly, 'letters guessed incorrectly array');

    } else {
      // if the letter has matched at any point, that means that the displayed word has also changed, so we run setDisplay() to recreate that string from our letter constructors
      this.setDisplay()
    }



  }

  this.pickWord();
  this.initializeWord();

}

var paintings = new Word(['Mona Lisa']);
//, 'The Idle Dancer', 'Green Scenery'

console.log('initial state of paintings game', paintings);
// paintings.pickWord();
// console.log(paintings);

//letter gussed correctly
paintings.checkWord('n')

//letter guessed incorrectly
paintings.checkWord('z');
paintings.checkWord('!');

paintings.checkWord('M')

console.log('state after two guesses', paintings);