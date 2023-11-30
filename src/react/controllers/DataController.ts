//

import { SessionController } from './SessionController';

class DataController {
  static read(key: string, defaultValue: any) {
    const user_id = SessionController.getUserId();

    return JSON.parse(localStorage.getItem(`${user_id}_${key}`) ?? defaultValue);
  }

  static update(key: string, value: any) {
    const user_id = SessionController.getUserId();

    localStorage.removeItem(`${user_id}_${key}`);
    localStorage.setItem(`${user_id}_${key}`, JSON.stringify(value));
  }
}

export { DataController };
