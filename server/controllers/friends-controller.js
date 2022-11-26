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

module.exports = friendsController;
