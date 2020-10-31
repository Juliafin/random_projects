const express = require('express');

const htmlRouter = express.Router();
let name;
let names = [];

htmlRouter.get('/', (req, res) => {

  console.log(name, 'name')

  const data = {
    name: name || "Victor",
    names
  }

  res.render('name', data);

});

htmlRouter.post('/name',(req, res) => {

  console.log(req.body, 'body');
  name = req.body.name;
  names.push(req.body.name);

  res.json({message: 'success'});

})


module.exports = htmlRouter;