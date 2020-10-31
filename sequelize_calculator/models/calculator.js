const Sequelize = require('sequelize');
const sequelizeConnection = require('../connection');

const {DataTypes} = Sequelize;

const Calculator = sequelizeConnection.define('Calculation', {
  num1: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  num2: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  operator: {
    allowNull: false,
    type: DataTypes.STRING,
    validate: {
      isIn: [['+', '-', '*', '/']]
    }
  },
  result: {
    allowNull: false,
    type: DataTypes.FLOAT
  }
})


module.exports = Calculator;
