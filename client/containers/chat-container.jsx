import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MessageContainer from './message-container';
import Message from '../components/message';
// import * as actions from '../actions'
const client = new WebSocket('ws://localhost:3002');

function ChatContainer(props) {
  const [input, setInput] = useState('');
  const [username, setUsername] = useState('arthursu'); // will come from redux
  const [friendName, setFriendName] = useState('kevindooley'); // will come from redux
  const [chatMessages, setChatMessages] = useState([
    {
      message: 'hi',
      username: 'arthursu',
      friendName: 'kevindooley',
    },
    {
      message: 'yoyo',
      username: 'kevindooley',
      friendName: 'arthursu',
    },
    {
      message: 'my guy',
      username: 'arthursu',
      friendName: 'kevindooley',
    },
  ]); // will come from redux
  //   console.log('client in component', client)
  //   client.on('open', () => {
  //     client.send('hello');
  //   })
  client.onopen = (event) => {
    client.send(JSON.stringify(username, ' has connected'));
    // console.log('here')
  };

  client.onmessage = (event) => {
    const message = JSON.parse(event.data);
    console.log('message in chatbox: ', message.message);
    console.log('chatMessages: ', chatMessages);
    setChatMessages((prev) => [...prev, message]);
  };

  function submit() {
    console.log('pressed!');
    console.log('send message: ', input);
    const messageObj = {
      username,
      message: input,
      friendName,
    };
    client.send(JSON.stringify(messageObj));
  }

  function readInput(e) {
    setInput((prev) => e.target.value);
  }

  let chat = [];
  for (let i = 0; i < chatMessages.length; i++) {
    let className = 'client';
    if (chatMessages.username !== username) className = 'friend';
    chat.push(
      <MessageContainer
        message={chatMessages[i].message}
        className={className}
      />
    );
  }
  const messages = useSelector((state) => state.messageList);
  const toRender = [];
  if (messages) {
    messages.forEach((message) => {
      console.log('MESSAGE', message);
      toRender.push(<Message body={message.body} />);
    });
  }

  return (
    <div className='chatbox-container'>
      <div>Chat:</div>
      <div>{toRender}</div>
      <div>
        <input onChange={readInput} />
      </div>
      <div>
        <button onClick={submit}>Submit Chat</button>
      </div>
      <div>{chat}</div>
    </div>
  );
}

export default ChatContainer;
