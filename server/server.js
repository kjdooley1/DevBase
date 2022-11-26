const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

const usersRouter = require('./routes/users');
const friendsController = require('./controllers/friends-controller');

//handle incoming requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(express.static(path.resolve(__dirname, '../dist')));;

//serves the html file
app.get('/', (req, res) => {
  console.log('GET REQUEST RECEIVED, sending HTML file');
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

// sends array of user objects when request to /users endpoint is received
app.use('/users', usersRouter);

//error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'an error occurred' },
  };

  const errorObj = Object.assign(defaultErr, err);

  res.status(errorObj.status).json(errorObj.message);
});

//listener
app.listen(PORT, () => {
  console.log("hello there I'm a server at ", PORT);
});

module.exports = app;
