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
    <nav className='navbar navbar-expand-lg navbar-light bg-light border-bottom'>
      <div className='container-fluid'>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ms-auto mt-2 mt-lg-0'>
            <li className='nav-item active'>
              <button className='btn' onClick={endSession}>Cerrar Sesión</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
