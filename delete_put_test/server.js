const express = require('express')
const bodyParser = require('body-parser')


const app = express()

const numbers = [];

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())



app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})


app.get('/getNumbers', (req, res) => {
  res.json({numbers})
})



app.post('/addNumber', (req, res) => {
  numbers.push(req.body.number);
  res.json({message: 'Number has been added', number:req.body.number});
})


app.put('/editNumber', (req, res) => {
  const {newNumber, index} = req.body;
  numbers[index] = newNumber;
  res.json({message: 'Number has been edited', newNumber, index});
  
  
})


app.delete('/deleteNumber', (req, res) => {
  const {index} = req.body;
  const numberToDelete = numbers[index];
  numbers.splice(index, 1);
  res.json({message: 'Number has been deleted', number:numberToDelete, index});
})



app.listen(8080, () => {
  console.log('Server listening on port 8080')
});