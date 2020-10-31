console.log('In quiz app!')

var quizData = [{
    "question": "Which is NOT a real element?",
    "choices": ["Hydrogen", "Radium", "Vibranium", "Arsenic"],
    "correctAnswer": 2
  },
  {
    "question": "Which is NOT a layer of the atmosphere?",
    "choices": ["Taposphere", "Thermosphere", "Exosphere", "Stratosphere"],
    "correctAnswer": 0
  },
  {
    "question": "Which is the most abundant gas in the atmosphere?",
    "choices": ["Hydrogen", "Oxygen", "Nitrogen", "Helium"],
    "correctAnswer": 2
  },
  {
    "question": "Which element is all life on Earth based on?",
    "choices": ["Hydrogen", "Oxygen", "Silicon", "Carbon"],
    "correctAnswer": 3
  },
  {
    "question": "Water evaporates, condenses in the atmosphwere, and falls back to the earth as rain. What is this process called?",
    "choices": ["Wheel of time", "Water cycle", "Water exogenesis", "Fun times"],
    "correctAnswer": 1
  }
]

console.log($);

var welcomeState = true;
var welcomeTimer = 10;
var currentQuestionIndex = 0;

function renderQuestion(currentIndex) {
  /* 
    {
    "question": "Which is NOT a real element?",
    "choices": ["Hydrogen", "Radium", "Vibranium", "Arsenic"],
    "correctAnswer": 2
    }
  */
    var question = quizData[currentIndex].question;

    var choiceHTML = quizData[currentIndex].choices.map(function(choice, index) {
      var id = `choice${index+1}`;
      return `
      <input name="question${currentIndex+1}" id="${id}" type="radio"/>
      <label for="${id}" >${index + 1}. ${choice}</label>
      `
    }).join("")

    var questionHTML = `
      <div id="question">
        <h2>${question}</h2>
        ${choiceHTML}
      </div>
    `;

    $('#quiz').html(questionHTML)

}



var welcomeInterval = setInterval(function() {
  $('#timer').text(welcomeTimer);
  welcomeTimer--;
  if (welcomeTimer === -1) {
    welcomeState = false;
    clearInterval(welcomeInterval);
    renderQuestion(currentQuestionIndex);
    $('button#next').removeClass('disabled');
  }

}, 1000)



$('button#next').click(function() {
  // Do nothing if we are still on the splash screen
  if (welcomeState) {
    return;
  }

  currentQuestionIndex++;
  renderQuestion(currentQuestionIndex);

});