//

import React from 'react';

import '../App.css';

import { SongController } from '../controllers/SongController';

const Content = ({ song }: { song: SongData }) => {
  const lines = SongController.getAllLines(song.uuid);

  if (lines === undefined) {
    return <div id='App-Content' className='container-fluid'></div>
  }

  return (
    <div id='App-Content' className='container-fluid'>
      <h1 className='mt-4 mb-4'>{song.name}</h1>
      {lines.map((line) => (
        <p key={line.uuid}>{line.value}</p>
      ))}
    </div>
  );
}

export { Content };
