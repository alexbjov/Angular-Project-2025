import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Book } from "../../../models/book.model";

@Component({
  selector: 'app-book-item',
  imports: [],
  templateUrl: './book-item.html',
  styleUrl: './book-item.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookItem {
  book: Book = {
    id: 'jskddier3492laks',
    title: 'Book Title',
    author: 'Book Author',
    year: 2018,
    pages: 240,
    likes: ["alex@gmail.com"],
    dislikes: ["john@yahoo.com"],
    description: "Book description",
    genre: "comedy",
    owner: "John"
  };
}
