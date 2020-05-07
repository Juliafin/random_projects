const sequelize = require('sequelize');

const options =  {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
  username: 'root',
  password: '',
  database: 'tweetsDB'
}

const sequelizeConnection = new sequelize(options);

module.exports = sequelizeConnection;
