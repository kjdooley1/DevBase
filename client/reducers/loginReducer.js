import * as types from '../constants/actionTypes';

const initialState = {
  loggedIn: 'kevindooley',
};

// const testInitialState = {users:[{username: "camkelly",
// firstName: "Cam",
// lastName: "Kelly"}]
// }

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default loginReducer;
