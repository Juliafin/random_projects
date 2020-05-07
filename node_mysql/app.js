const mysql = require('mysql');
const mysqlConfig = require('./config');
const { mainMenu } = require('./questions');
// console.log(mysqlConfig);

var connection = mysql.createConnection(mysqlConfig);


function connectToSql() {
  connection.connect(function(err) {
    if(err) {
      console.error(err);
    }

  });

}

function findAllBooks() {

  function handleBooksResponse(error, books) {
    if (error) {
      throw error;
    }

    console.log('Here are the results: \n');
    // console.log(books[0].title);
    books.forEach(function(book, index) {
      console.log(`\t ${index + 1}. ${book.title}`);
    });

  }

  var queryString = 'SELECT * FROM books;';
  connection.query(queryString, handleBooksResponse);

};


function specificBookSearch(query) {
  function handlebookSearchResponse(error, books) {
    if (error) {
      throw error;
    } else {
      // Find the matches

      console.log(`There are ${books.length} matches: \n`);
      books.forEach(function(match, index) {
        console.log(`\t ${index + 1}. ${match.title}`);
      });

    }
  }

  var queryString = `SELECT * FROM books WHERE LOWER(title) LIKE '%${query.toLowerCase()}%';`;
  connection.query(queryString, handlebookSearchResponse);

}




connectToSql();

mainMenu()
  .then(function(response) {
    console.log('You replied: ');
    console.log(response);

    // Check what the user selected
    if (response.mainMenu === 'Find all books') {
      findAllBooks();

    } else if (response.mainMenu === 'Search for a specific book') {
      specificBookSearch(response.bookSearch);
      console.log('Inside searching for a book')
    }


    // Make the query to the database based on the user choice

    connection.end();
  });



