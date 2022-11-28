import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import * as actions from '../actions'

function MessageContainer(props) {
    // const messages = useSelector(state => state.messages)
    return (
        <div className={props.className}>
        {props.message}
        </div>
    )
}

export default MessageContainer;