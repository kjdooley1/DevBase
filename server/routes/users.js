const express = require('express');

const router = express.Router();
const friendsController = require('../controllers/friends-controller');

// sends array of user objects when request to /users endpoint is received
router.get('/', friendsController.getUsers, (req, res) => {
  // send json of array of user objects
  console.log('sending array of users');
  res.status(200).json(res.locals.users);
});

// redirect to user router
// app.use('/:username', userRouter);

module.exports = router;
