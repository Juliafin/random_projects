const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');
const $ = require('jquery');

function fixJson(res) {
  console.log('THIS IS THE RES', res)
  let fixedData = res;
  fixedData = res.replace(/}\,]/g, "}]");
  return fixedData;
}


app.use(cors());

app.get('/', (req,res) => {
  res.sendfile(__dirname + '/index.html');
})

app.get('/testing', (req,res) => {
  return axios('http://cwkb.org/work/id/1451/json', 
  {
    transformResponse: (req) => {return fixJson(req)}, 
    type:'json' 
  })
  .then((response) => {
    console.log('success, this is the response', JSON.stringify(response.data, null, 2)); return res.json({response: response.data} )})
  .catch((err) => {console.log('er')})
  
  

})


app.listen('8080', () => {
  console.log('server running on port 8080');
})