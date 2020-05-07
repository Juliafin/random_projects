const express = require('express');

const app = express();

const apiRouter = require('./routes');

// console.log(apiRouter);
app.use(apiRouter);


const PORT = 9980;

const server = app.listen(PORT, () => console.log(`server listening on port ${PORT}`) );

module.exports = {app, server};