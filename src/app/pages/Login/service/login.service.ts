import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  loggedUser = '';

  constructor() {}

  login(username: string, password: string) {
    const token = btoa(username + 'mytoken');
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.loggedUser = '';
  }

  isAauthenticated(): boolean {
    const token = window.localStorage.getItem('token');
    return !!token;
  }
}
