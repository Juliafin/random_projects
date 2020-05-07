const express = require('express');


const apiRouter = express.Router();


apiRouter.get('/test', (req, res) => {
  res.status(200).json({message: "This is a success"});
});



module.exports = apiRouter;