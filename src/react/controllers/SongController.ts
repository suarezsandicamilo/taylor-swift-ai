//

import { v4 as uuidv4 } from 'uuid';

import { DataController } from './DataController';

class SongController {
  static getAllSongs() {
    return DataController.read('songs', []) as SongData[];
  }

  static getAllLines(song: string) {
    return DataController.read(`${song}:lines`, []) as LineData[];
  }

  static createSong(name: string) {
    const songs = DataController.read('songs', []) as SongData[];

    const uuid = uuidv4();

    songs.push({
      name,
      uuid,
    });

    DataController.update('songs', songs);

    DataController.update(`${uuid}:lines`, []);
  }

  static addLineToSong(song: string, line: string) {
    const lines = DataController.read(`${song}:lines`, []) as LineData[];

    lines.push({
      value: line,
      uuid: uuidv4(),
    });

    DataController.update(`${song}:lines`, lines);
  }
}

export { SongController };
