const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 9001;

app.use(express.json());

function protectMyRoute(req, res, next) {
  
  if (req.body.password === "password") {
    next()
  }
 res.status(403).json({message: "You are unauthorized!"})
}




app.use((req, res, next) => {
  console.log(req);

  if (req.path === '/test') {
    req.method = 'POST'
  }

  if (req.body.query === "something") {

    res.setHeader("x-custom-header", "hi")
  } else {
    res.setHeader("x-custom-header", "you did not pass something!")
  }

  const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];

  if (colors.includes(req.body.query)) {
    req.body.specialMessage = `You queried for the color ${req.body.query}!`
  }


  next()
});

// https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY

function testHandler (req, res) {
  console.log(req.body);
  
  res.json(req.body);
}

app.get('/test', protectMyRoute, testHandler);
app.post('/test', (req, res) => {
  res.json({
    message: "You have been redirected to this post!"
  })
});


app.post('/hello', (req, res) => {
  const message = {...{message: "Hello!"}, ...req.body} 
  res.json(message)
})


app.post('/backup', (req, res) => {
  res.json({message: "You have reached the backup!"});
});



app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});