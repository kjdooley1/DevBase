import * as types from '../constants/actionTypes'

const initialState = {
    users: []
}

// const testInitialState = {users:[{username: "camkelly",
// firstName: "Cam",
// lastName: "Kelly"}]
// }

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_USERS:
            console.log('in load users case');
            const users = action.payload;
            return {
                users
            }
        default: {
            return state;
        }
    }
}

export default userReducer;