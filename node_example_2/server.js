const express = require('express');

const app = express();

const bodyParser = require('body-parser');





const PORT = 9090;

const numbers = [1, 2, 3];

app.use(express.json());
// app.use(bodyParser.urlencoded({extended: false}));


app.get('/', function(req, res) {
    console.log('Inside root ')
    console.log(req);
    res.sendFile(`${__dirname}/index.html`)
});


app.get('/numbers', function(req, res) {
  res.json({message: "Here are the numbers", numbers: numbers})
});


app.post('/addNumbers/:num', (req, res) => {
  let num = req.params.num;
  numbers.push(parseInt(num));
  res.json({message: "Number added", number: num})
})


app.put('/changeNumber', (req, res) => {
  console.log('req.body', req.body);
  let numToInsert = parseInt(req.body.num);
  let indexToChange = parseInt(req.body.index);

  numbers[indexToChange] = numToInsert;
  res.json({message: "Number changed", num: numToInsert});
});



app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`)
});



