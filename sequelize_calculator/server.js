const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = '9001';
const Calculator = require('./models/calculatorModel');
const calcFunction = require('./utils/calculator');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
})


app.get('/calculations', function (req, res) {
  Calculator.findAll()
    .then(function(calculations) {
      return res.json({calculations})
    })
    .catch(function(error) {
      return res.status(500).json({message: 'internal server error'});
    })
    
});


app.post('/calculate', function(req, res) {
  // {num1: "5", num2: "10", "operator": "/ or * or + or -", result: (written on the server side)}

  req.body.num1 = parseInt(req.body.num1)
  req.body.num2 = parseInt(req.body.num2)
  req.body.result = calcFunction(req.body.num1, req.body.num2, req.body.operator);
  console.log(req.body)
  Calculator.create(req.body)
    .then(function(savedCalculation) {
      return res.json(
        {message: 'saved', 
        savedCalculation
      })
      
    })
    .catch(function(error) {
      return res.status(500).json({message: 'internal server error'});
    })

});


app.delete('/clearcalculator', function (req, res) {
  Calculator
    .drop()
    .then(function() {
      return Calculator
        .sync()
      })
      .then(function() {
        res.json({message: 'history cleared'})
        
    })

});

app.listen(PORT, function () {
  console.log(`Server connected on port ${PORT}`);

  Calculator.sync()
    .then(function() {
      console.log(`table created (if it didn't exist`)
    })
});

