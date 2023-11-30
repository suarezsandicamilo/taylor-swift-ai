//

import { TokenResponse } from '@react-oauth/google';

class SessionController {
  static getUserId() {
    return localStorage.getItem('userinfo_id') ?? '';
  }

  static async startSession(response: TokenResponse, callback?: () => {}) {
    const { access_token } = response;

    const data = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${access_token}`);

    const json = await data.json();

    localStorage.setItem('userinfo_id', json.id);

    if (callback !== undefined) {
      callback();
    }
  }

  static endSession(callback?: () => {}) {
    localStorage.removeItem('userinfo_id');

    if (callback !== undefined) {
      callback();
    }
  }

  static hasSession() {
    return localStorage.getItem('userinfo_id') !== null;
  }
}

export { SessionController };
