import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import User from '../components/User';
import { fetchAllUsers, fetchMessages } from '../actions/action-creators';

export function FriendsContainer() {
//   console.log('*************************', props);
  const dispatch = useDispatch();
  useEffect(async () => {
    const res = await fetchAllUsers()();
    dispatch(res);
  }, []);

  const userData = useSelector((state) => state.users.users);
  const toRender = [];

  //   console.log('===========================', loggedIn);

  userData.forEach((user) => {
    toRender.push(
      <div>
        <User
          className='user'
          username={user.username}
          firstname={user.firstname}
          lastname={user.lastname}
        />
      </div>
    );
  });

  return <div className='friends-list-container'>{toRender}</div>;
}
