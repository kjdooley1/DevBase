import React, { Component } from 'react';
import ChatContainer from './containers/chat-container';
import MessageContainer from './containers/message-container';
import { FriendsContainer } from './containers/friends-list-container';
import { NewsContainer } from './containers/news-container';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <div className='nav-bar'></div>
      <FriendsContainer />
      <ChatContainer />
      <NewsContainer />
    </div>
  );
}

// const App = () => {
//     return (
//       <Router>
//         <div className='container'>
//           <Routes>
//             <Route path='/' element={<FriendsContainer/>} />
//             <Route path='/messages' element={<MessageContainer />} />
//           </Routes>
//         </div>
//       </Router>
//     );
//   }

export default App;
