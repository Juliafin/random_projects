const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = '9001';
const bodyParser = require('body-parser');

// import model

const Calculator = require('./models/calcModel');


function calculate(num1, num2, operator) {
  switch(operator) {
    
    case "+":
      return num1 + num2
      
    case "-":
      return num1 - num2
      
    case "*":
      return num1 * num2
      
    case "/":
      return num1 / num2
      


  }

}



  
mongoose.Promise = global.Promise;

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}));
// extended true handles nested data being sent in url




//html serving route

app.get('/', (req, res) => {

  res.sendFile(__dirname + '/public/index.html');

})



// calculator routes

// route to return our calculations
app.get('/calculations',  (req, res) => {

  return Calculator
    .find()
    .then((calculations) => {
      res.json({
        message: "Here are the calculations",
        calculations
      })
    })

});


// route to post our calculation
app.post('/calculation', (req, res) => {
  // do something to verify that the object we are getting is correct
  // our calculation should look like 
 /* 
  {
    number1:
    number2:
    operator
  }
 
 */

  // calculate the result

req.body.number1 = parseInt(req.body.number1);
req.body.number2 = parseInt(req.body.number2);

  req.body.result = calculate(req.body.number1, req.body.number2, req.body.operator)
  
  console.log(req.body, 'calculation from the form');

  Calculator
    .create(req.body)
    .then((writtenCalculation) => {
      res.json({message: "calculation sent"})
    })
    .catch((err) => {
      res.json({message: "internal server error"})
    })

});













// Connect to mongodb (localhost) and connect to server
function mongoConnection() {
  const connectionString = "mongodb://localhost:4000"
  return mongoose.connect(connectionString);
}


mongoConnection()
  .then(function () {
    console.log('Connected to our local database on port 4000.');
    app.listen(PORT, () => console.log(`Our app started on PORT ${PORT}.`));
  })
  .catch(function(err){
    console.log('something went awry', err)
  });

