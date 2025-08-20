import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiBook } from "../../../models/apiBook.model";
import { AuthService } from "../../../services/auth.service";
import { BooksService } from "../../../services/books.service";
import { BookItem } from '../book-item/book-item';

@Component({
  selector: 'app-books-board',
  imports: [CommonModule, BookItem],
  templateUrl: './books-board.html',
  styleUrl: './books-board.css'
})
export class BooksBoard {
  private authService = inject(AuthService);
  readonly isLogged = this.authService.isLoggedIn;
  books$!: Observable<ApiBook[]>;

  constructor(private booksService: BooksService) {
    this.books$ = this.booksService.books$;
    this.booksService.getBooks().subscribe();
  }
}
