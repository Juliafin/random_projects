const express = require('express');
const app = express();



app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html'); 
})


app.get('/testRedirect', (req, res) => {
  res.redirect('/redirected');
})


app.get('/redirected', (req, res) => {
  res.sendFile(__dirname + '/redirect.html'); 
  
})


app.listen('8080', () => {
  console.log('server started')
})