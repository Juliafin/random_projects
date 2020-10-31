const express = require('express');

const apiRouter = express.Router();
let name;

apiRouter.post('/name',(req, res) => {

  name = req.body.name;

  res.json({message: 'success'});

})



module.exports = apiRouter;