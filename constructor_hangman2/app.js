const inquirer = require('inquirer');
const Word = require('./word');


function randomWord() {
  const words = ['adagio', 'allegro', 'moderator', 'piano', 'forte'];
  let randomWord = words[Math.floor(Math.random() * words.length)];
  return randomWord;
}


  let wordToGuess = randomWord();
  let word = new Word(wordToGuess);

function prompt() {
  let questions = [
    {
      type:"input",
      name: "hangman",
      message: "Guess a letter"
    }
  ]
    // word.renderDisplay();
  
  return inquirer.prompt(questions)
    .then(function(answer) {
      console.log(answer)
      word.checkLetterGuessed(answer.hangman);
      word.renderDisplay();
      
      if (!word.gameWon){
        prompt()
      }

    })

}


prompt();