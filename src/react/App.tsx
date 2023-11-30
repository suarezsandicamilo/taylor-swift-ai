//

import React from 'react';

import './App.css';

import { Content } from './components/Content';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { SignIn } from './components/SignIn';

import { SessionController } from './controllers/SessionController';

function App() {
  if (!SessionController.hasSession()) {
    return (
      <SignIn />
    );
  }

  return (
    <>
      <Navbar />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-4 col-md-2 col-lg-2 p-0'>
            <Sidebar />
          </div>
          <div className='col-sm-8 col-md-10 col-lg-10'>
            <Content />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
