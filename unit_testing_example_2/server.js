const express = require('express');

// npmjs.org



const app = express();

app.get('/testing', (req, res) => {
  res.json({message: "This was sucessfull!"});
});



const server = app.listen(9001, () => console.log('Listening on port 9001'));

module.exports = {app:app, server:server};