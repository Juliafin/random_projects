var inquirer = require('inquirer');


var questions = [
  {
    type: "list",
    name: "color",
    message: "What is your favorite color?",
    choices: ['red', 'green', 'blue', 'yellow', 'purple', 'white', 'black', 'orange'],
    pageSize: 8
  },
  {
    type: "list",
    name: "food",
    message: "What is your favorite food?",
    choices: ['sushi', 'italian', 'french', 'american', 'chinese', 'russian', 'indian'],
    pageSize: 8
  }
]


function promptUser() {

  inquirer.prompt(questions).then(function (answers) {
      console.log(answers);
      console.log('Your favorite color was ' + answers.color)
      console.log('Your favorite food was ' + answers.food)
      
    });
}

promptUser()
