const express = require('express');

const app = express();

const PORT = 9001;

let counter = 0;

function multiplyCounter(req, res, next) {
  counter *= 10;
  console.log('Counter middleware', counter);
  next();
}

app.use(multiplyCounter);


app.get('/increment', function(req, res) {
  console.log(`counter before: ${counter} `);
  counter++;
  console.log(`counter after: ${counter} `);
  res.json({counter: counter});

})


app.post('/AnotherRoute', function (req, res) {
  console.log('inside another route');
  res.json({message: 'Hi'});
})






app.listen(PORT, function () {
  console.log(`App is listening on port ${PORT}`);
});