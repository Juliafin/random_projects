const express = require('express');
const app = express();
const PORT = '9001';
const expressHandlebars = require('express-handlebars');
const bodyParser = require('body-parser');
let notes = require('./data/note');

app.use(express.static('public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.engine('handlebars', expressHandlebars({defaultLayout: "default"}));
app.set('view engine', 'handlebars');




app.get('/', function (req, res) {
  res.render('notes', {
    notes: notes,
    greeting: "Aloha"
  });
});

app.post('/notes',function(req, res) {
  console.log(req.body);

  notes.push({
    author: req.body.author,
    note: req.body.note
  })

  return res.json({message: "The post was sucessful!", notePosted: req.body});
});



app.listen(PORT, function() {
  console.log(`The server has started on port ${PORT}.`);
});