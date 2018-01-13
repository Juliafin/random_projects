const sequelize = require('sequelize');

const options = {
  database: 'notes_db',
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
  username: 'root',
  password: ''
}

const sequelizeConnect = new sequelize(options);

module.exports = sequelizeConnect;