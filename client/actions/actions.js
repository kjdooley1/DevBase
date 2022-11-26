import * as types from '../constants/actionTypes'


//create user
export const addMessageActionCreator = message => ({
    type: types.ADD_MESSAGE,
    payload: message,
  });

//load users
export const loadUsersActionCreator = () => (
  fetch('/users')
  .then(data => data.json())
  .then({
    type: types.LOAD_USERS,
    payload: data
  })

);


//send a message