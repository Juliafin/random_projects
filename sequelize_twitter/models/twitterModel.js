const sequelize = require('sequelize');
const sequelizeConnection = require('./../config/sqlConnection');

const tweetModel = {
  tweet: {
    type: sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      len: [2, 55]
    }
  },
  author: {
    type: sequelize.STRING,
    allowNull: false,
    validate: {
      len: [5, 30]
    }
  }
}

const Tweet = sequelizeConnection.define('tweets', tweetModel);

module.exports = Tweet;

