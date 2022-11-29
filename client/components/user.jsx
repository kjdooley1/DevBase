import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMessages } from '../actions/action-creators';

export default function User(props) {
  const { username, firstname, lastname } = props;
  const loggedIn = useSelector((state) => state.loggedIn.loggedIn);
  // console.log('rendering User', props)
  const dispatch = useDispatch();
  return (
    <div>
      {firstname}
      <button
        onClick={async () => {
          console.log('%%%%%%%%%%%%%%%%%%', props.lastname);
          const res = await fetchMessages(loggedIn, props.username)();
        //   console.log('00000000000', res);
          dispatch(res);
        }}
      >
        click me!
      </button>
    </div>
  );
}
