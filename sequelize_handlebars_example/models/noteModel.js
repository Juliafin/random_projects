const sequelize = require('sequelize');
const sequelizeConnection = require('./../sequelizeconnection');

const note = {
  note: {
    type: sequelize.STRING,
    allowNull: false,
    unique: true
  },
  author: {
    type: sequelize.STRING,
    allowNull: false,
    unique: true
  } 
}


const Note = sequelizeConnection.define('Note', note);

module.exports = Note;