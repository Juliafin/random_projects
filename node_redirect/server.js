const express = require('express');
const app = express();
const fetch = require('node-fetch')
const axios = require('axios')
var parseString = require('xml2js').parseString;
var cors = require('cors')
app.use(cors())
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html'); 
})


app.get('/testRedirect', (req, res) => {
  res.redirect('/redirected');
})


app.get('/redirected', (req, res) => {
  res.sendFile(__dirname + '/redirect.html'); 
  
})



app.get('/image', (req, res) => {
  return axios.get('http://thecatapi.com/api/images/get?format=xml&results_per_page=20')

  .then((images) => {
    // console.log(images.data, 'images');
    // console.log(images.url)
    parseString(images.data, function (err, result) {
      console.dir(result);
      res.json(result)
    })


    // res.json(images)
  })
  .catch((err) => {
    console.log(err)
  })

})


app.listen('8080', () => {
  console.log('server started')
})