//

import React, { useState } from 'react';

import './App.css';

import { Content } from './components/Content';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { SignIn } from './components/SignIn';

import { SessionController } from './controllers/SessionController';
import { SongController } from './controllers/SongController';

function App() {
  const [song, setSong] = useState({
    name: '',
    uuid: ''
  } as SongData);

  const [generatedSong, setGeneratedSong] = useState('');

  const handleGenerateSong = async (inputData: string) => {
    // Aquí debes hacer la llamada al servidor para generar la canción con la IA
    try {
      const response = await fetch('http://localhost:3001/generate', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: [inputData] }),
      });

      const json = await response.json() as string;

      const uuid = SongController.createSong(inputData);

      for (const line of json.split('\n')) {
        SongController.addLineToSong(uuid, line);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    console.log('voy a ahcer submit');
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const userInput = formData.get('songText')?.toString(); // Usando el operador de opción (?)
    if (userInput) {
      await handleGenerateSong(userInput);
      window.location.reload();
    }
  };


  if (!SessionController.hasSession()) {
    return <SignIn />;
  }

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
            <Sidebar setSong={setSong} />
          </div>
          <div className='col-sm-8 col-md-10 col-lg-10'>
            {song.name !== '' ? (
              <Content song={song} />
            ) : (
              <>
                <h4>Generar Canción</h4>
                <form id='songForm' onSubmit={handleFormSubmit}>
                  <div className='form-group'>
                    <label htmlFor='songText'>Palabra Clave:</label>
                    <input type='text' className='form-control' id='songText' name='songText' required />
                  </div>
                  <button type='submit' className='btn btn-primary'>
                    Generar
                  </button>
                </form>
                {generatedSong && (
                  <div className='mt-4'>
                    <h5>Canción Generada:</h5>
                    <p>{generatedSong}</p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
