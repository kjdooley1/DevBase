import * as types from '../constants/actionTypes'

const initialState = {
    users: []
}

const data = fetch('/users')
.then(data => data.json())
.then(users => initialState.users = users)
.then(() => console.log(initialState.users))
.catch(err => console.log('error fetching user list'))

// console.log(initialState);

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        // case types.LOAD_USERS:
        //     const users = action.payload;
        //     return {
        //         users
        //     }
        default: {
            return state;
        }
    }
}

export default userReducer;