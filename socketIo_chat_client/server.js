const express = require('express');
const socketIo = require('socket.io');
const app = express();
const http = require('http');
const server = http.Server(app);
const cors = require('cors');

const notes = [];

const Io = socketIo(server); 

server.listen(1180, () => {
  console.log('server listening');
})

app.use(cors());
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

Io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  }
);

  socket.on('notes write', (data) => {
    console.log(data);
    if (data) {
      
      notes.push(data);
    }
    Io.sockets.emit('notes send', {notes})
  } )

});