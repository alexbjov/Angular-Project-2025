import { Injectable, signal } from '@angular/core';
import { User } from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn = signal<boolean>(false);
  private _currentUser = signal<User | null>(null);
  private _users: User[] = [
    {
      id: '5fa6sgju4gj28ff371d',
      username: 'John',
      email: 'john@gmail.com',
      phone: '+359 235 638 848'
    },
    {
      id: '5faggkisdr57f371e',
      username: 'Jane',
      email: 'jane@gmail.com',
      phone: '+359 355 826 884'
    },
    {
      id: '5fa693756jfksl371f',
      username: 'David',
      email: 'david@gmail.com',
      phone: '+359 287 734 523'
    }
  ]

  public isLoggedIn = this._isLoggedIn.asReadonly();
  public currentUser = this._currentUser.asReadonly();

  constructor() {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      const user = JSON.parse(savedUser);
      this._currentUser.set(user);
      this._isLoggedIn.set(true);
    }
  }

  login(email: string, password: string): boolean {
    if (email && password) {
      const user = this._users[0];
      this._currentUser.set(user);
      this._isLoggedIn.set(true);

      localStorage.setItem('currentUser', JSON.stringify(user));

      return true;
    }

    return false;
  }

  register(username: string, email: string, phone: string, password: string, rePassword: string): boolean {
    if (username && email && phone && password && rePassword) {
      const newUser: User = {
        id: `user_${Date.now()}`,
        username: username,
        email: email,
        phone: phone
      };

      this._users.push(newUser);
      this._currentUser.set(newUser);
      this._isLoggedIn.set(true);

      localStorage.setItem('currentUser', JSON.stringify(newUser));

      return true;
    }

    return false;
  }

  logout(): void {
    this._currentUser.set(null);
    this._isLoggedIn.set(false);
    localStorage.removeItem('currentUser');
  }

  getCurrentUserId(): string | null {
    return this._currentUser()?.id || null;
  }
}
