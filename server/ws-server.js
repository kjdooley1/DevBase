const express = require('express');
const app = express();
const path = require('path');
console.log('running ws server');

//importing ws library
const ws = require('ws');

const wsServer = new ws.Server({ noServer: true });

wsServer.on('connection', (socket) => {
  // console.log('ws server clients ', wsServer.clients)
  // console.log('wsServer: ', wsServer )
  socket.on('message', (message) => {
    // message = message.json();
    console.log('message: %s', message);
    const parsedMessage = JSON.parse(message);
    console.log('user %s', parsedMessage.username);
    console.log('message %s', parsedMessage.message);
    wsServer.clients.forEach((client) => client.send(message.toString()));
    // addMessage(parsedMessage);
  });
});

// function addMessage(messageObj) {

// }

//to handle parsing the request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '../dist')));

//general page
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});

//handling requests

//catch all request handler
app.use((req, res) => res.status(404).send('No page found'));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

const server = app.listen(3002); //listens on port 3002 -> http://localhost:3002/
server.on('upgrade', (request, socket, head) => {
  wsServer.handleUpgrade(request, socket, head, (socket) => {
    wsServer.emit('connection', socket, request);
  });
});
