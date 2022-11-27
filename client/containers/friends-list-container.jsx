import React from "react";
import { useSelector, useDispatch } from "react-redux";

export function FriendsContainer() {
    const userData = useSelector(state => state.users);
    const toRender = [];
    // console.log("userData:", userData)
    // console.log("userData.users:", userData.users)
    userData.users.forEach(user => {
        toRender.push(<User className='user' username={user.username} firstname={user.firstName} lastname={user.lastName}/>)
    });
    return (
        <div>
            {toRender}
        </div>
    )
}