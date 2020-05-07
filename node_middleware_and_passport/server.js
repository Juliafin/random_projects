var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var PORT = 9001



app.use(bodyParser.json());
app.use(bodyParser.urlencoded())
// app.use(addOneMiddleware)
function addOneMiddleware(req, res, next) {
  req.body.number++
  next()
}

function validateNumber(req, res, next) {
  if (parseInt(req.body.number) > 100) {
    next()
  } else {
    res.redirect('/wrongnumber')
  }
}







var numbers = []

app.get('/numbers', (req, res) => {
  res.json({numbers:numbers})
});

app.get('/redirect', (req, res) => {
  res.redirect('/pagetwo')
})


app.get('/pagetwo', (req, res) => {
  res.sendFile(__dirname + '/public/pagetwo.html')
})


app.get ('/wrongnumber', (req, res) => {
  res.sendFile(__dirname + '/public/404.html')
})


app.get('/welcome', (req, res) => {
  res.sendFile(__dirname + '/public/welcome.html')
})


app.get('/', (req, res) => {
  console.log('DIRNAME', __dirname)
  res.sendFile(__dirname + '/public/index.html')
})


app.post('/number', validateNumber, (req, res) => {
  let {number} = req.body
  numbers.push(number);
  // res.json({message: 'The number was successfully posted', number})
  res.redirect('/welcome')


})


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
});




