const express = require('express');

const app = express();
const PORT = 9001;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, () => {
  console.log(`SERVER is listening on port ${PORT}`);
});

console.log('hello');