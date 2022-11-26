import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../actions'

function MessageContainer() {
    const messages = useSelector(state => state.messages)

    return (
        <div>
        
        </div>
    )
}