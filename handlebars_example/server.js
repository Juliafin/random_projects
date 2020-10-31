const express = require('express');
const app = express();
const PORT = '9001';
const expressHandlebars = require('express-handlebars');

let notes = require('./data/note');

app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.engine('handlebars', expressHandlebars({defaultLayout: "default"}));
app.set('view engine', 'handlebars');




app.get('/', function (req, res) {
  res.render('notes', {
    notes: notes,
    greeting: "Aloha"
  });
});

app.post('/notes',function(req, res) {


  notes.push({
    author: req.body.author,
    note: req.body.note
  })

  return res.json({message: "The post was sucessful!", notePosted: req.body});
});


app.put('/notes', function(req, res) {

  var noteIndex = req.body.index;

  notes[noteIndex] = {
    author: req.body.author,
    note: req.body.note
  }

  res.json({
    message: "Updated",
    note: req.body
  })

})



function serverStart() {

  server = app.listen(PORT, function() {
      console.log(`The server has started on port ${PORT}.`);
    });
  return server;
}



if (require.main === module) {
  var s = serverStart();
  s.close();
  console.log('s', s);
}



