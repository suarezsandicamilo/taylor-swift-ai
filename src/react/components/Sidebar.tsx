//

import React from 'react';

import '../App.css';

const Sidebar = () => {
  return (
    <div id='sidebar-wrapper' className='border-end bg-white'>
      <div className='sidebar-heading border-bottom bg-light'>Taylor Swift AI</div>
      <div className='list-group list-group-flush'>
        <a className='list-group-item list-group-item-action list-group-item-light p-3' href='/'>...</a>
        <a className='list-group-item list-group-item-action list-group-item-light p-3' href='/'>...</a>
        <a className='list-group-item list-group-item-action list-group-item-light p-3' href='/'>...</a>
        <a className='list-group-item list-group-item-action list-group-item-light p-3' href='/'>...</a>
        <a className='list-group-item list-group-item-action list-group-item-light p-3' href='/'>...</a>
        <a className='list-group-item list-group-item-action list-group-item-light p-3' href='/'>...</a>
        <a className='list-group-item list-group-item-action list-group-item-light p-3' href='/'>...</a>
      </div>
    </div>
  );
}

export default Sidebar;
