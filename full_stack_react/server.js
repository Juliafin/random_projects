const express = require('express');

const app = express();

const PORT = 9090

const htmlRouter = require('./backend/routes/htmlRoutes');

// Static file serving
app.use(express.static('frontend/full_stack/build'));

app.use(htmlRouter);



app.listen(PORT, () => {
  console.log(`The server is listening on port ${PORT}`);
})

