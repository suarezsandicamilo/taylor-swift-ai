//

import React, { Dispatch, SetStateAction } from 'react';

import '../App.css';

import { SongController } from '../controllers/SongController';

const Sidebar = ({ setSong }: { setSong: Dispatch<SetStateAction<SongData>> }) => {
  const songs = SongController.getAllSongs();

  return (
    <div id='App-Sidebar' className='border-end'>
      <div className='list-group list-group-flush'>
        {songs.map((song) => (
          <button className='btn list-group-item list-group-item-action list-group-item-light p-3' key={song.uuid} onClick={() => setSong({ name: song.name, uuid: song.uuid })}>{song.name}</button>
        ))}
      </div>
    </div>
  );
}

export { Sidebar };
