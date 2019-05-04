const express = require('express');
const path = require('path');
const htmlRouter = express.Router();

htmlRouter.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '../../frontend/full_stack/build/index.html'));
});


module.exports = htmlRouter;