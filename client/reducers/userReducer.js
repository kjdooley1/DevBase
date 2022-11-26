import { types } from "pg"
import * as types from '../constants/actionTypes'

const data = fetch('/users')
.then(data => data.json())

const initialState = {
    users: data
}

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