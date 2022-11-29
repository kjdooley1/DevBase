import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Message (props) {
    const {sender, receiver, body, date} = props;
    // console.log('rendering User', props)
    return (
        <div>{body}</div>
    )
}