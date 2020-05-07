const express = require('express');
const bodyParser = require('body-parser');
const app = express();


let totalSum = 0;

app.use(bodyParser.json({}));

app.post('/addToSum', function(req, res) {

  const num = req.body.num;
  totalSum += num;

  res.json({
    message: 'Added to sum: ',
    sum: totalSum
  });


});




app.get('/add', function(request, response) {

  console.log(request.body);
  const num1 = request.body.num1;
  const num2 = request.body.num2;
  const sum = num1 + num2;


  response.json({
    message: "Here is your sum: ", 
    sum: sum
  });

});





app.listen(9001, function() {
  console.log('Server is listening on port 9001! ');
});