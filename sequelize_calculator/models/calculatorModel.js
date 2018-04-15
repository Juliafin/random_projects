const sequelizeConnection = require('../connection');
const sequelize = require('sequelize');

const calcModel = {
  num1: {
    type: sequelize.INTEGER,
    required: true
  },
  num2: {
    type: sequelize.INTEGER,
    required: true
  },
  operator: {
    type: sequelize.STRING,
    required: true
  },
  result: {
    type: sequelize.INTEGER,
    required: true
  }
  
};


const Calculator = sequelizeConnection.define('calculations', calcModel);

module.exports = Calculator;
