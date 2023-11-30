//

import React from 'react';

import './App.css';

import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Content from './components/Content';

import { SessionController } from './controllers/SessionController';
import SignIn from './components/SignIn';

function App() {
  if (!SessionController.hasSession()) {
    return (
      <SignIn />
    );
  }

  return (
    <div id='wrapper' className='d-flex'>
      <Sidebar />
      <div id='page-content-wrapper'>
        <Navbar />
        <Content />
      </div>
    </div>
  );
}

export default App;
