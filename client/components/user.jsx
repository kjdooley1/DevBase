import React from "react";
import { useSelector, useDispatch } from "react-redux";

export function User (props) {
    const {username, firstName, lastName} = props;
    return (
        <div>{username}</div>
    )
}