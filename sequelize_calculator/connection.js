const Sequelize = require('sequelize');

var connectionOptions = {
  host: "localhost",
  port: 3306,
  username: 'root',
  password: "rue9dQW}R834kcv8}",
  database: "calcDB",
  dialect: 'mysql'
};

const sequelizeConnection = new Sequelize(connectionOptions);

module.exports = sequelizeConnection;