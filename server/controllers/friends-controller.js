const db = require('../models/friends-model');

const friendsController = {};

friendsController.getUsers = (req, res, next) => {
  const GET_USERS = 'SELECT username, firstName, lastName FROM users';
  console.log('in getUsers middleware');
  db.query(GET_USERS)
    .then((data) => {
      console.log('response data', data);
      res.locals.users = data.rows;
      return next();
    })
    .catch((err) => {
      return next({ err });
    });
};

friendsController.getMessages = (req, res, next) => {
  //get variables from params
  const { user, friend } = req.params;

  //set values from params
  const values = [user, friend];

  //set sql query
  const GET_MESSAGES = 'SELECT * FROM messages WHERE sender=$1 AND receiver=$2 OR sender=$2 AND receiver=$1';
  console.log('in getMessages middleware');
  db.query(GET_MESSAGES, values)
    .then((data) => {
      console.log('response data', data);
      res.locals.messages = data.rows;
      return next();
    })
    .catch((err) => {
      return next({ err });
    });
};

module.exports = friendsController;
