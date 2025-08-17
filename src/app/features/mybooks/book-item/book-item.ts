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
  book!: Book;
}
