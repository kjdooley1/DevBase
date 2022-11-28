import { parse } from 'requirejs';
import * as types from '../constants/actionTypes'
import dispatch, { useDispatch } from 'react-redux'
import store from '../store';

//create user
export const addMessageActionCreator = message => ({
    type: types.ADD_MESSAGE,
    payload: message,
  });

//load users
export const fetchAllUsers = () => async dispatch => {
  console.log("dispatch", dispatch)
  const response = await fetch ('/users')
  const parsedResponse = await response.json();
  console.log('payload is:', parsedResponse)
  return {
    type: types.LOAD_USERS,
    payload: parsedResponse
  }
}

//load messages
export const fetchMessages = () => async dispatch => {
  const response = await fetch ('')
}

//send a message