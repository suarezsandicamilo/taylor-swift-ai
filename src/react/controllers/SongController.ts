//

import { DataController } from './DataController';

class SongController {
  static getAllSongs() {
    return DataController.read('songs', []) as SongData[];
  }

  static getAllLines(song: string) {
    return DataController.read(`${song}:lines`, []) as LineData[] | undefined;
  }
}

export { SongController };
