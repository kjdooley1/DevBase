// import * as actions from '../actions'
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllUsers, fetchMessages } from '../actions/action-creators';

function MessageContainer(props) {
  // const messages = useSelector(state => state.messages)
  const dispatch = useDispatch();
  useEffect(async () => {
    const res = await fetchMessages()();
    dispatch(res);
  }, []);
  return <div className={props.className}>{props.message}</div>;
}

export default MessageContainer;
