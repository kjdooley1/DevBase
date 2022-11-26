import { types } from "pg"
import * as types from '../constants/actionTypes'

const initialState = {
    messageList: []
}

const messageReducer = (state = initialState, action) => {
    let messageList;
    switch (action.type) {
        case types.ADD_MESSAGE:
            const newMessage = {
                content: '',
                from: '',
                to: ''
            }
            messageList = state.messageList.slice();
            messageList.push(newMessage);
            return {
                messageList
            }
        default: return state;
    }
}

export default messageReducer;