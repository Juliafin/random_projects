const express = require('express');

const someKindofServer = express()

const PORT = '11000';

someKindofServer.get('/test', (req, res) => {
  res.set('X-SomecustomHeader', 'hello')
  res.json({message: 'You have successfully hit the test endpoint', value: 10});
})



someKindofServer.listen(PORT, () => {
  // do something useful.
  console.log(`The server is listening on port ${PORT}`);

});