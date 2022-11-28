import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../actions'

const userData = useSelector(state => state.users);

export function friendsContainer() {
    const toRender = [];
    userData.forEach(user => {
        toRender.push(<User className='user' username={user.username} firstname={user.firstName} lastname={user.lastName}/>)
    });
    return (
        <div>
            {toRender}
        </div>
    )
}