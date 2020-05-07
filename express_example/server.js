const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios')
const app = express();
const PORT = 7878;
const bcrypt = require('bcrypt');
// client id
// KZrpdnpz600sbFg8CkLWWFMUGgTbcamvVQYoYzHiwBxu8fIbZO1Vly4YD4kcZh2m

// client Secret
// XagCEk2nxN9n4kTNKeK3O00PyCcuzOkmY0QClDRP3D7i4dhgv6Qk9ojv2J0QAK2n
// https://api.iconfinder.com/v3/

function iconFinderRequest() {
  const options = {
    method: "GET",
    url: "https://api.iconfinder.com/v3/",
    data: {
      client_id: 'KZrpdnpz600sbFg8CkLWWFMUGgTbcamvVQYoYzHiwBxu8fIbZO1Vly4YD4kcZh2m',
      client_secret: 'XagCEk2nxN9n4kTNKeK3O00PyCcuzOkmY0QClDRP3D7i4dhgv6Qk9ojv2J0QAK2n'
    }

  }
  axios.get("https://api.iconfinder.com/v3/iconsets", {
    params : {

      client_id: 'KZrpdnpz600sbFg8CkLWWFMUGgTbcamvVQYoYzHiwBxu8fIbZO1Vly4YD4kcZh2m',
      client_secret: 'XagCEk2nxN9n4kTNKeK3O00PyCcuzOkmY0QClDRP3D7i4dhgv6Qk9ojv2J0QAK2n'
    }
  })
    .then((res) => {
      // console.log(JSON.stringify(res.data.iconsets, null, 2), 'res');
      res.data.iconsets.forEach((result) => {
        console.log(result)
      })
    
    })
    // .then((body) => console.log(body))
    .catch((err) => console.log(err))
}
// iconFinderRequest()


app.use(bodyParser.json());
app.use(incrementOne);
// app.use(bodyParser.urlencoded())
var numbers = [];

// example of a middleware function
function incrementOne (req,res, next) {
  req.body.num += 1;
  next();
}


app.get('/getallnumbers', function (req, res) {
  res.json({message: 'Here are all of the numbers', numbers: numbers});
});


app.get('/sendNumbers/:numberIndex', function(req, res) {
  // console.log(req.headers);
  // console.log(req.query)
  console.log(req.body);
  var index = parseInt(req.params.numberIndex);
  if (numbers.length !== 0 && numbers[index]) {
    res.json({message: 'Here is the number you requested: ', number:numbers[index]});
  } else {
    res.status(404).json({message: 'Sorry your number has not been found'});
  }
});

app.post('/', incrementOne, incrementOne, incrementOne,  function(req, res) {
  console.log('This is the request.body', req.body);
  // console.log('this is the entire request', req)
  numbers.push(req.body.num);
  console.log('numbers', numbers)
  res.json({message: 'Number received', body: req.body});
});



app.get('/someotherEndpoint', function(req, res) {
  console.log('this is the request.query', req.query);
  res.json({message: 'Here is the query that you sent: ', query: req.query});
});

var users = []

app.post('/register', function (req, res) {
  
  var userFound = users.find(function (user) {
    return user.username === req.body.username;

  });

  if (!userFound) {
    
    bcrypt.hash(req.body.password, 10, function(err, hash) {
      // Store hash in your password DB.
      users.push({username: req.body.username, password: hash});

      console.log('users', users);
      res.json({message: "The user has been successfully added to the database"})

    });
  } else {
    res.json({message: "The user already exists"});
  }

});


app.post('/login', function(req, res) {
  var userFound = users.find(function (user) {
    return user.username === req.body.username;

  });

  if (userFound) {
    bcrypt.compare(req.body.password, userFound.password, function(err, response) {
      console.log('response', response);
      if (response) {
        res.json({message: "You have successfully logged in"});
      } else {
        res.json({message: "You entered the wrong password."});
      }

  });
  } else {
    res.json({message: "User is not found."})
  }



});




app.listen(PORT, function() {
  console.log(`Our server is listening on port ${PORT}`);
});

