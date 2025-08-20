import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { BehaviorSubject, Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { ApiBook } from "../models/apiBook.model";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private apiUrl = 'http://localhost:3030/data';

  private booksBehaviorSubject = new BehaviorSubject<ApiBook[]>([]);

  public books$ = this.booksBehaviorSubject.asObservable();
  router = inject(Router);

  constructor(private httpClient: HttpClient) { }

  authService = inject(AuthService);
  currentUser = this.authService.currentUser;

  getBooks(): Observable<ApiBook[]> {
    return this.httpClient.get<ApiBook[]>(`${this.apiUrl}/books`)
      .pipe(
        tap(book => this.booksBehaviorSubject.next(book))
      );
  }

  // deleteBook(bookId: string): void {
  //   // let headers = new HttpHeaders();
  //   // headers = headers.set('Content-Type', 'application/json');
  //   // headers = headers.set('X-Authorization');
  //   let headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'X-Authorization': `${this.authService.currentUser()?.token}`
  //   });
  //   this.httpClient.delete(`${this.apiUrl}/books/${bookId}`, {
  //     headers
  //   });
  // }
}
