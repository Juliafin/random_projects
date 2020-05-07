const express = require('express');
const app = express();
const PORT = 9001;

/* 
    get,post,put,delete
app.someProtocol(route, callback(request, response) {
  // do something with the request

  //eventually respond using the response  .json / .text / .sendFile(pathtofile)

})


*/

app.use(express.json());

app.get('/', function(req, res) {
  console.log(req);
  res.json({message: "Server is active!"})
});


app.post('/test', function(req, res) {
  console.log('req.body', req.body);
  res.json({message: "Here is the req.body", body: req.body})
})



app.post('/increment', addOne, function(req, res) {
  console.log('req.body inside increment', req.body);
  res.json({message: "Inside increment", number: req.body.number});
})

/* Client side code you might have in your client js to interact with /increment route: 
$.ajax({
  method: "POST",
  data: {
    number: 3
  },
  url: "http://localhost:9001/increment"
}).then(function(response) {
  console.log(response)
})


*/





function addOne (req, res, next) {
  if (req.body.number) {
    req.body.number++;
  }
  next();
}


app.get('/giveHtml', function(request, response) {
  response.sendFile(__dirname + '/index.html');
})



app.listen(PORT, function() {
  console.log(`Server is listening on port ${PORT}`);
});