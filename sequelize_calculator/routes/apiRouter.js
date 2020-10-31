const express = require('express');
const apiRouter = express.Router();
const validationCalculation = require('../utils/validateCalculation');
const Calculator = require('../models/calculator');
const calculatorUtil = require('../utils/calculator');


// Get all calculations
apiRouter.get('/allCalculations', async(req, res) => {

  try {
    const calculations = await Calculator.findAll();
    console.log(calculations);
    res.json({
      message: "Successfully retrieved calculations",
      calculations
    })
  } catch(error) {
    res.json({
      error: "Error getting calculations"
    })
  }
})


// Create the calculation in our db
apiRouter.post('/calculate', async(req, res) => {
  const {num1, num2, operator} = req.body;

  console.log(num1, num2, operator, 'num1, num2, operator');

  if (!validationCalculation(num1, num2, operator)) {
    return res.status(400).json({
      error: "Request is not valid. Num1 and num2 must be numbers. The operator must be one of: +, -, *, /"
    })
  }

 

  try {
    const result = calculatorUtil(num1, num2, operator);
    const calculationResult = await Calculator.create({
      num1, num2, operator, result
    })
    console.log('Calculation result:', calculationResult);

    res.json({
      message: "Successfully calculated",
      calculation: result
    })

  } catch(error) {
    console.log('Error adding calculation to Calculations table'),
    console.log(error);
    res.status(500).json({
      error: 'Error saving the calculation'
    })
  }

})




module.exports = apiRouter;