const express = require('express');
const app = express();


const notProduction = process.env.NODE_ENV !== 'production';

if (notProduction) {
  const dotenv = require('dotenv');
  dotenv.config(); 
}

const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.json({
    message: `My favorite color is ${process.env.FAVORITE_COLOR}`
  })
})


app.listen(PORT , () => {
  console.log(`Listening on port ${PORT}`);
})