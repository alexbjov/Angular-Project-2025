import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from '@angular/core';
import { Router } from "@angular/router";
import { map, Observable, tap } from "rxjs";
import { ApiUser } from "../models/apiUser.model";
import { User } from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3030/users';

  private _isLoggedIn = signal<boolean>(false);
  private _currentUser = signal<User | null>(null);

  public isLoggedIn = this._isLoggedIn.asReadonly();
  public currentUser = this._currentUser.asReadonly();
  private http = inject(HttpClient);
  private router = inject(Router);

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
      token: apiUser.accessToken,
      email: apiUser.email,
    };
  }

  login(email: string, password: string): Observable<User> {
    return this.http.post<ApiUser>(`${this.apiUrl}/login`, { email, password }).pipe(
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
    password: string,
    rePassword: string): Observable<User> {
    return this.http.post<ApiUser>(`${this.apiUrl}/register`, {
      username,
      email,
      password,
      rePassword
    }).pipe(
      map(apiUser => this.mapApiUserToUser(apiUser)),
      tap(user => {
        console.log("User:", user);
        this._currentUser.set(user);
        this._isLoggedIn.set(true);
        localStorage.setItem('currentUser', JSON.stringify(user));
      })
    );
  }

  logout(): Observable<void> {
    return this.http.get<void>(`${this.apiUrl}/logout`).pipe(
      tap(() => {
        this._currentUser.set(null);
        this._isLoggedIn.set(false);
        localStorage.removeItem('currentUser');
        this.router.navigate(['/home']);
      })
    );
  }

  getCurrentUserId(): string | null {
    return this._currentUser()?.id || null;
  }

  update(user: User): Observable<User> {
    return this.http.put<ApiUser>(`${this.apiUrl}/users/${user.id}`, {
      _id: user.id,
      accessToken: user.token,
      email: user.email,
      username: user.username
    }).pipe(
      map(apiUser => this.mapApiUserToUser(apiUser)),
      tap(user => {
        this._currentUser.set(user);
        localStorage.setItem('currentUser', JSON.stringify(user))
      })
    );
  }

  // getToken(): string {
  //   return this._currentUser()?.get('token');
  // }
}
