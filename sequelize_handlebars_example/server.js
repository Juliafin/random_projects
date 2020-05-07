const express = require('express');
const bodyParser = require('body-parser');
const expressHandlebars = require('express-handlebars');

const app = express();
const PORT = '9001';
const notes = require('./data/notes');
const sequelizeConnection = require('./sequelizeconnection');
const Note = require('./models/noteModel');



app.set('view engine', 'handlebars');
app.engine('handlebars', expressHandlebars({defaultLayout: 'ourDefaultLayout'})) // 

// calls the expressHandlebars callback whenever a filename ends in extension .handlebars

app.get('/', (request, response) => {
  response.render('welcome', {
    notes: notes,
    greeting: "Aloha"
  });
});


app.listen(PORT, () => {
  console.log(`Our server is listening on port ${PORT}`);

  // syncs the table properties with the database when server starts
  Note.sync()
    .then(() => {
      console.log('connection has been established to the SQL db');
      // returns all the notes in the db
      return Note
      // writes all the notes from the data/note.js file to the db
        // .bulkCreate(notes)
      // finds all the notes
      .findAll()
    })
    .then((notes) => {
      console.log('Here are the returned notes from the db')
      console.log(notes);
    })
    .catch((err) => {
      console.log('there was an error connecting to the db');
      console.log(err);
    })


})
