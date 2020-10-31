const path = require('path');
const express = require('express');

const htmlRouter = express.Router();


htmlRouter.get('/', (req, res) => {
  const htmlPath = path.resolve(__dirname, '../public/index.html');
  console.log(htmlPath);
  res.sendFile(htmlPath);
})




module.exports = htmlRouter;