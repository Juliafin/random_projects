const express = require('express');
const path = require('path');

const htmlRouter = express.Router();


htmlRouter.get('*', (req, res) => {
  const indexPath = path.resolve(__dirname, '../blog/build/index.html')  
  res.sendFile(indexPath);
});


module.exports = htmlRouter;