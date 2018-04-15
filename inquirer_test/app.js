const inquirer = require('inquirer');
const mySql = require('mysql');

var connectionOptions = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "greatBay_DB"
};

var ourConnection = mySql.createConnection(connectionOptions);

ourConnection.connect(function (error) {
  if (error) {
    throw error
  }

  ourConnection.query('SELECT * FROM auctions', function(error, data) {
    console.log('this is the result of our query');
    console.log(data, 'data');
  })
});

// function prompt() {

//   var question = [{
//       name: "Dinner",
//       message: "Did you have dinner today?",
//       choices: ["yes", "no"],
//       type: "list"
//     },
//     {
//       name: "Food",
//       message: "What did you have dinner today?",
//       choices: ["pizza", "italian", "mexican", "sushi", "salad ala vie"],
//       type: "list",
//       when: (answers) => { 
//         if ( answers.Dinner === 'yes') {
//           return true;
//         }
//       }
//     },
//     {
//       name: "Name",
//       message: "What is your name?"
//     }
//   ]
//   // inquirer.prompt returns a promise
//   return inquirer.prompt(question)
// }


//     console.log('You said: ' + JSON.stringify(answers, null, 2))
// prompt()
// .then((answers) => {
//   })
//   .catch((error) => {
//     console.log('there was an error', error)
//   })