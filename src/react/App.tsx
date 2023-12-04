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

  const [temperature, setTemperature] = useState(0.5);

  const handleGenerateSong = async (inputData: string) => {
    try {
      const response = await fetch('http://localhost:3001/generate', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: [inputData, temperature]  }),
      });

      const json = await response.json() as string;
      console.log(json);

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
    const userInput = formData.get('songText')?.toString();
    const userTemperature = formData.get('temperature')?.toString();
    if (userInput) {
      if (userTemperature) {
        const parsedTemperature = parseFloat(userTemperature);
        if (!isNaN(parsedTemperature) && parsedTemperature >= 0 && parsedTemperature <= 1) {
          setTemperature(parsedTemperature); // Actualiza el estado de la temperatura
        } else {
          alert('Temperatura no válida. Debe ser un número entre 0 y 1.');
          return;
        }
      }
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
                <h1 className='my-4'>Crear Canción</h1>
                <form id='songForm' onSubmit={handleFormSubmit}>
                  <div className='form-group'>
                    <label htmlFor='songText' className='form-label'>Nombre:</label>
                    <input type='text' className='form-control' id='songText' name='songText' required />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='temperature' className='form-label'>Temperatura (entre 0 y 1):</label>
                    <input type='number' className='form-control' id='temperature' name='temperature' step='0.01' min='0' max='1' defaultValue={temperature} />
                  </div>
                  <button type='submit' className='btn btn-primary my-2'>Crear</button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
