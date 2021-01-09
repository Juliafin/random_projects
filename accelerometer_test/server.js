const express = require('express');
const cors = require('cors');
const path = require('path');
const server = express();
const https = require('https');
const fs = require('fs');


const PORT = 13000;

server.use(cors());
server.use(express.static(__dirname))

var certOptions = {
  key: fs.readFileSync(path.resolve(__dirname, './server.key')),
  cert: fs.readFileSync(path.resolve(__dirname, './server.crt'))
}

server.get('/', (req, res) => {
  // res.setHeader('Content-Security-Policy', "script-src 'self' https://use.typekit.net/; object-src 'self';"


  res
  .append('Feature-Policy', 'accelerometer *; magnetometer;')
  res
  .sendFile(__dirname + '/index.html');
})


server.get('/test', (req, res) => {
  res.json({
    message: "Hello!"
  })
})


const secureServer = https.createServer(certOptions, server);

secureServer.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})