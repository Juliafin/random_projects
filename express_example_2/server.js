const express = require('express');

const server = express();

const PORT = 9001;


const allowedUserName = 'Julia';
const allowedPassword = 'password';

server.use(express.json());

function validateAddNumbersRequest(body) {
  if (body && body.numbers && body.numbers.length) {
    const numbersValid = body.numbers.every(function(number) {
      return Boolean(parseInt(number)) && typeof(number) !== 'string';
    });
    if (numbersValid) {
      return true;
    }
  } else {
    return false;
  }
}


function validateUser(body) {
  const { username, password } = body;
  if (username && password) {
    if (username === allowedUserName && password === allowedPassword) {
      return true;
    }
  } else {
    return false;
  } 
}

function addNumbers(numbers) {
  return numbers.reduce(function(sum, element) {
    return sum + element;
  }, 0);
}


server.post('/addNumbers', function(request, response) {
  console.log('body: ', request.body);
  console.log('numbers: ', request.body.numbers);


  // Do an authentication check if the user is allowed access!

  const isUserValid = validateUser(request.body);

  if (!isUserValid) {
    return response.status(401).json({
      message: 'This user is unauthorized!'
    })
  }


  // Validate the request body
  const isRequestValid = validateAddNumbersRequest(request.body);

  if (!isRequestValid) {
    return response.status(400).json({
      message: 'The numbers key must be provided and must contain an array of numbers'
    });
  }


  console.log('Inside post addNumbers!')
  return response.json({
    message: 'Here is your sum!',
    sum: addNumbers(request.body.numbers)
  });
});


server.listen(PORT, function() {
  console.log(`Server listening on port ${PORT}`);
});

