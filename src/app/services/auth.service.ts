import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from '@angular/core';
import { map, Observable, tap } from "rxjs";
import { ApiUser } from "../models/apiUser";
import { User } from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api';

  private _isLoggedIn = signal<boolean>(false);
  private _currentUser = signal<User | null>(null);
  // private _users: User[] = [
  //   {
  //     id: '5fa6sgju4gj28ff371d',
  //     username: 'John',
  //     email: 'john@gmail.com',
  //     phone: '+359 235 638 848'
  //   },
  //   {
  //     id: '5faggkisdr57f371e',
  //     username: 'Jane',
  //     email: 'jane@gmail.com',
  //     phone: '+359 355 826 884'
  //   },
  //   {
  //     id: '5fa693756jfksl371f',
  //     username: 'David',
  //     email: 'david@gmail.com',
  //     phone: '+359 287 734 523'
  //   }
  // ]

  public isLoggedIn = this._isLoggedIn.asReadonly();
  public currentUser = this._currentUser.asReadonly();
  private http = inject(HttpClient);

  constructor() {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      const user = JSON.parse(savedUser);
      this._currentUser.set(user);
      this._isLoggedIn.set(true);
    }
  }

  private mapApiUserToUser(apiUser: ApiUser): User {
    return <User>{
      id: apiUser._id,
      username: apiUser.username,
      email: apiUser.email,
      phone: apiUser.tel
    };
  }

  login(email: string, password: string): Observable<User> {
    return this.http.post<ApiUser>(`${this.apiUrl}/login`, { email, password }, {
      withCredentials: true
    }).pipe(
      map(apiUser => this.mapApiUserToUser(apiUser)),
      tap(user => {
        this._currentUser.set(user);
        this._isLoggedIn.set(true);
        localStorage.setItem('currentUser', JSON.stringify(user));
      })
    );
  }

  register(
    username: string,
    email: string,
    phone: string,
    password: string,
    rePassword: string): Observable<User> {
    return this.http.post<ApiUser>(`${this.apiUrl}/register`, {
      username,
      email,
      tel: phone,
      password,
      rePassword
    }).pipe(
      map(apiUser => this.mapApiUserToUser(apiUser)),
      tap(user => {
        this._currentUser.set(user);
        this._isLoggedIn.set(true);
        localStorage.setItem('currentUser', JSON.stringify(user));
      })
    );
  }

  logout(): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/logout`, {}).pipe(
      tap(() => {
        this._currentUser.set(null);
        this._isLoggedIn.set(false);
        localStorage.removeItem('currentUser');
      })
    );
  }

  getCurrentUserId(): string | null {
    return this._currentUser()?.id || null;
  }

  update(user: User): Observable<User> {
    return this.http.put<ApiUser>(`${this.apiUrl}/users/${user.id}`, {
      _id: user.id,
      username: user.username,
      email: user.email,
      tel: user.phone
    }).pipe(
      map(apiUser => this.mapApiUserToUser(apiUser)),
      tap(user => {
        this._currentUser.set(user);
        localStorage.setItem('currentUser', JSON.stringify(user))
      })
    );
  }

  getToken(): string {
    return "TOKEN=jdk246";
  }
}
