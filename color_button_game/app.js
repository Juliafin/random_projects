console.log('Welcome to the color button game!');

var state = {
  score: 0,
  gameStarted: false,
  previousColorClicked: '',
  buttonInterval: null,
  userWon: false
};


function changeButtonColor() {
  var colorClasses = ['red', 'green', 'blue'];
  var button = $('#colorButton');
  state.buttonInterval = setInterval(function() {
    var randomColorClass = colorClasses[Math.floor(Math.random() * colorClasses.length)];
    // Remove existing classes from the button
    button.removeClass('red green blue');
    button.addClass(randomColorClass);


  }, 400);
}


function colorButtonListener() {
  $('#colorButton').click(function() {
    if (state.gameStarted && !state.userWon) {
      var buttonClass = $(this).attr('class');
      console.log(`Button clicked!: ${buttonClass}`);
      // Stops the user from spam clicking the button for points
      if (state.previousColorClicked !== buttonClass) {
        adjustScore(buttonClass);
        updateScore();
      }
      state.previousColorClicked = buttonClass;
      checkForWin();
      
    }
  });
}

function startGameListener() {
  var startButton = $('#start');
  startButton.click(function() {
    if (!state.gameStarted && !state.userWon) {
      state.gameStarted = true;
      changeButtonColor();
    }
  });
}


function adjustScore(color) {
  if (color === 'red') {
    state.score--; 
  } else if (color === 'blue') {
    state.score += 2;
  } else if (color === 'green') {
    state.score++;
  }
}

function checkForWin() {
  if (state.score >= 10) {
    // Tell the user they have won
    $('#status').text('You have won!');
    // Stop the button from flashing different colors
    clearInterval(state.buttonInterval);
    state.userWon = true;
    resetGame();
  }
}

function resetGame () {
  $('#colorButton').removeClass('red green blue');
  $('#start').text('Play again?');
  state.score = 0;
  state.buttonInterval = null;
  state.gameStarted = false;
  state.previousColorClicked = '';
  state.userWon = false;
  updateScore();
}



function updateScore() {
  var scoreElement = $('#score');
  scoreElement.text(state.score);
}



function initialize() {
  startGameListener();
  colorButtonListener();
}



$(document).ready(function() {
  console.log('Page has loaded');

  initialize();





});

