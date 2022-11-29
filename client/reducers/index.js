import { combineReducers } from "redux";
import messageReducer from '../reducers/messageReducer'
import userReducer from "./userReducer";
import loginReducer from "./loginReducer";

const reducers = combineReducers({
    messages: messageReducer,
    users: userReducer,
    loggedIn: loginReducer
})

export default reducers;