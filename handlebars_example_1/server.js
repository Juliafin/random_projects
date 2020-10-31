const express = require('express');
const expressHandlebars = require('express-handlebars');
const { PORT } = require('./config/constants');
const htmlRouter = require('./routes/htmlRouter');
const apiRouter = require('./routes/apiRouter');

const app = express();

app.engine('handlebars', expressHandlebars());
app.set('view engine', 'handlebars');

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// app.use(apiRouter);
app.use(htmlRouter);



app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});




