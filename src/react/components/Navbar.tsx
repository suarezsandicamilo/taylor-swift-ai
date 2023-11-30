//

import React from 'react';

import '../App.css';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light border-bottom'>
      <div className='container-fluid'>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ms-auto mt-2 mt-lg-0'>
            <li className='nav-item active'><a className='nav-link' href='/'>...</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
