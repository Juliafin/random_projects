const inquirer = require('inquirer');
module.exports = {

  
  mainMenu: function () {
    
    const question = [
      {
        type: "list",
        name: "mainMenu",
        message: "Welcome to our books database!\n Please choose from the following options:",
        choices: ["Find all books", "Search for a specific book"]
      }, {

        type: "input",
        name: "bookSearch",
        message: "Please search for a book below:",
        when: function(answers) {
          console.log(answers, 'answers');
          if (answers.mainMenu === 'Search for a specific book') {
            return true;
          }
          return false;
        }
      }


    ];
    
    return inquirer.prompt(question);
    
  }
  
}
  
  
  
  