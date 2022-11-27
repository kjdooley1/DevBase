import React, { Component } from 'react';
import MessageContainer from './containers/message-container';
import { FriendsContainer } from './containers/friends-list-container';

function App () {
    return (
        <div>
            <h1>App!</h1>
            <FriendsContainer/>
       </div>
    )
}

export default App;