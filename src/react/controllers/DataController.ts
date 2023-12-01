//

import { SessionController } from './SessionController';

class DataController {
  static read(key: string, defaultValue: any) {
    const user_id = SessionController.getUserId();

    const item = localStorage.getItem(`${user_id}:${key}`);

    if (item === null) {
      return defaultValue;
    }

    return JSON.parse(item);
  }

  static update(key: string, value: any) {
    const user_id = SessionController.getUserId();

    localStorage.removeItem(`${user_id}:${key}`);
    localStorage.setItem(`${user_id}:${key}`, JSON.stringify(value));
  }
}

export { DataController };
