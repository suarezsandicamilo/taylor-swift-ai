//

import React from 'react';

import '../App.css';

import { SessionController } from '../controllers/SessionController';

const Navbar = () => {
  const endSession = () => {
    SessionController.endSession(() => {
      window.location.reload();
    });
  };

  return (
    <nav id='App-Navbar' className='navbar'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='/'>Taylor Swift AI</a>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <button className='btn' onClick={endSession}>Cerrar Sesión</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Navbar };
