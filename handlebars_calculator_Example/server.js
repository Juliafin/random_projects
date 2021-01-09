const express = require('express');
const expressHandlebars = require('express-handlebars');


const server = express();

const PORT = 8080;

server.use(express.static('assets'))
server.use(express.json());
server.use(express.urlencoded({ extended: true}));


server.engine('handlebars', expressHandlebars(
  {
    helpers: {
      isMoreThan100: function(value) {
        return value > 100;
      }
    }
  }
));
server.set('view engine', 'handlebars')
const calculations = [];

server.get('/', (req, res) => {
  // res.sendFile(__dirname + '/assets/index.html');
  console.log('calculations: ', calculations)
  res.render('calculator', {name: "Shannon", calculations})
})


const calculate = (num1, num2, operator) => {
  switch(operator) {
    case '+':
      // do something
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
  }
}


server.post('/calculate', (req, res) => {
  const {num1, num2, operator} = req.body;
  const result = calculate(num1, num2, operator);
  calculations.push({
    num1, num2, operator, result
  })

  res.json({message: 'Calculated', ok: true})


})



server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
});