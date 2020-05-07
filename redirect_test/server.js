const express = require('express')

const app = express()


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')

});

app.get('/second', (req, res) => {
  res.sendFile(__dirname + '/app.html')

});


app.get('/redirect', (req, res) => {
  // res.redirect('/second')

  res.json({
    url: '/second'
  })
  // Send back some piece of info to the client informing them to redirect....
})


app.listen(9001, () => {
  console.log('App listening on port 9001')
})