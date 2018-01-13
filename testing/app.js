// run: npm init to create a package.json file
// run: npm install --save express body-parser
// start server by running: node app.js
// go to webpage at localhost:12000/



const express = require('express');

const bodyParser = require('body-parser');


const server = express();
server.use(bodyParser());
server.use(bodyParser.json());
server.get('/', function (req, res) {
  return res.sendFile(__dirname + '/index.html')
})

server.get('/test', function(req, res) {
  return res.json({message:"Hello, you have reached the server"})
});

server.post('/calculate', function (req, res) {
  console.log(req.body, 'req.body is the stuff we are receiving from the client');

  return res.json( {numbersAdded: parseInt(req.body.num1) + parseInt(req.body.num2)});
})


server.listen('12000', function() {
  console.log('Server is listening at port 12000');
});




















































// //
// function sum (num1, num2) {
//   // If num1 and/or num2 are not numbers, then return an error, otherwise return the sum of the numbers
//   if (!isNumeric(num1) || !isNumeric(num2)) {
//     throw new Error('One or both values are not numbers')
//   }
//   return parseFloat(num1) + parseFloat(num2);
// }


// console.log(sum(100,200));

// console.log(sum("100", 200));

// function isNumeric(n) {
//   return !isNaN(parseFloat(n)) && isFinite(n);
// }


// try {
//   console.log(sum("asdfkj34", 523));
// } catch(err) {
//   console.log(err)
//   console.log('there was an error')
// }

// export 