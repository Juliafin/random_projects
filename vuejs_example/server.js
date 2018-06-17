const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config');
const app = express();
const path = require('path')

app.use(express.static(path.join(__dirname, './public/')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/html/index.html'));
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})