var mysql = require('mysql');
const fs = require('fs');

var connectionOptions = {
  host: "localhost", 
  port: 3306,
  user: "root",
  password: "",
  database: "my_db",
  multipleStatements: true

}


var connection = mysql.createConnection(connectionOptions);

connection.connect( (err) => {
  if (err) {
    throw err;
  }
  console.log(`Connected as id ${connection.threadId}`);
  // afterConnection();
  createPlayListTable();
  console.log('ending connection');
  
})

function afterConnection() {
  connection.query("SELECT * from USERS", (err, res) => {
    if (err) {
      throw err
    }
    console.log(res);
  })
}


function createPlayListTable() {
  
  fs.readFile('./books.sql', 'utf8', (err, data) => {
    
    if (err) console.log(err)
    console.log(typeof data);
    connection.query(data, (err, res) => {
      if (err) throw err;
      console.log(res, 'writing succeeded!')
      connection.end()
    })
  })
}

