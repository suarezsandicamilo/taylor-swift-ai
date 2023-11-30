//

import React from 'react';

import '../App.css';

const Sidebar = () => {
  return (
    <div id='App-Sidebar' className='border-end'>
      <div className='list-group list-group-flush'>
        <a className='list-group-item list-group-item-action list-group-item-light p-3' href='/'>Canción 1</a>
        <a className='list-group-item list-group-item-action list-group-item-light p-3' href='/'>Canción 2</a>
        <a className='list-group-item list-group-item-action list-group-item-light p-3' href='/'>Canción 3</a>
        <a className='list-group-item list-group-item-action list-group-item-light p-3' href='/'>Canción 4</a>
        <a className='list-group-item list-group-item-action list-group-item-light p-3' href='/'>Canción 5</a>
        <a className='list-group-item list-group-item-action list-group-item-light p-3' href='/'>Canción 6</a>
      </div>
    </div>
  );
}

export { Sidebar };
