import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../../../models/book.model';
import { BooksService } from "../../../services/books.service";
import { BookItem } from '../book-item/book-item';

@Component({
  selector: 'app-books-board',
  imports: [CommonModule, BookItem],
  templateUrl: './books-board.html',
  styleUrl: './books-board.css'
})
export class BooksBoard {
  books: Book[] = [];
  books$!: Observable<Book[]>;

  constructor(private booksService: BooksService) {
    this.books$ = this.booksService.getBooks();
  }
}
