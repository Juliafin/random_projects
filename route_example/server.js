const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 9001;


const notes = [];

app.use(express.static(__dirname + '/public' ))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
});




app.get('/notes', (req, res) => {
  
  res.json({notes});
});


app.post('/createNote', (req, res) => {
  const note = req.body.note;
  notes.push(note);
  res.json({message: "Note has been created.", note})
})



app.listen(PORT, () => {
  console.log(`The server is listening on port ${PORT}`);
})