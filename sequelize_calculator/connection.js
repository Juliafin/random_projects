const sequelize = require('sequelize');

var connectionOptions = {
  host: "localhost",
  port: 3306,
  username: 'root',
  password: "",
  database: "calcDB",
  dialect: 'mysql'
};

const sequelizeConnection = new sequelize(connectionOptions);

module.exports = sequelizeConnection;