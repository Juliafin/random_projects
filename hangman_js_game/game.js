
console.log('hello world');

var state = {
  wins: 0,
  losses: 0,
  guessesRemaining: 10,
  lettersGuessed: [],
  cereals: ['cheerios', 'rice krispies', 'corn flakes', 'frosted flakes', 'raisin bran', 'fruit loops'],
  wordGuessed: [],
  currentGuess: [],
  initialized: false,
  cerealElement: document.getElementById('cereal'),
  lettersGuessedElement: document.getElementById('lettersguessed')
};

// Starts the game
function initializeGame() {
  document.onkeyup = function (event) {
    if (event.keyCode === 13 && !state.initialized) {
      var init = document.getElementById('init');
      init.innerText = 'Guess your favorite cereal: ';
      state.initialized = true;
      pickCereal();
      initGuess();
      displayCereal();
      
      console.log('We are pressing a key');
      console.log(event);    
    } else {
      displayCereal(event.key);
    }
    console.log(event);
  };
}

// Chooses a word for the user to guess
function pickCereal() {
  var cerealPicked = state.cereals[Math.floor(Math.random() * 6)];
  console.log('cereal picked', cerealPicked);
  state.wordGuessed = cerealPicked.split('');
}

// Initializes the display to a set of underscores
function initGuess() {
  for (var i = 0; i < state.wordGuessed.length; i ++) {
    state.currentGuess.push('_');
  }
}


function displayCereal(letter=null) {
  var cerealText = '';
  console.log(letter, 'letter guessed');
  console.log(state.wordGuessed, letter);
  checkLetter(letter);


  for (var i = 0; i < state.wordGuessed.length; i++ ) {  
    if (state.wordGuessed[i] === ' ') {
      cerealText += '  ';
    
    } else if (/[a-z]/.test(state.currentGuess[i])) {
      cerealText += state.currentGuess[i] + ' ';
    
    } else if (state.wordGuessed[i] === letter) {
      state.currentGuess[i] = state.wordGuessed[i];
      cerealText += letter + ' ';
    
    } else {
      // console.log(state.currentGuess[i]);
      cerealText += '_' + ' '; 
    }
    // console.log('cereal text', cerealText);
  }
  // console.log('cereal text = ', cerealText);
  state.cerealElement.innerText = cerealText;

}



function checkLetter(letter=null) {
  if (!state.wordGuessed.includes(letter) && !state.currentGuess.includes(letter) && state.initialized ) {
    state.lettersGuessed.push(letter);
  }
  state.lettersGuessedElement.innerText = state.lettersGuessed.join(',');

}



initializeGame();







console.log(state.wins);

