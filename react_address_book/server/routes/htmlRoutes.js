const {Router} = require('express');
const path = require('path');

const htmlRouter = Router();

htmlRouter.get('/', (req, res) => {
  console.log('Main html route');
  res.sendFile(path.resolve(__dirname, './../../client/build/index.html'));
});

// htmlRouter.get('*', (req, res) => {
//   console.log('Fallback');
//   res.sendFile(path.resolve(__dirname, './../../client/build/index.html'));
// });

module.exports = htmlRouter;