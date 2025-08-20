import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { ApiBook } from "../../../models/apiBook.model";
import { AuthService } from "../../../services/auth.service";
import { BooksService } from "../../../services/books.service";

@Component({
  selector: 'app-book-item',
  imports: [CommonModule, RouterLink],
  templateUrl: './book-item.html',
  styleUrl: './book-item.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookItem {
  @Input() book!: ApiBook;
  private authService = inject(AuthService);
  private booksService = inject(BooksService);
  private router = inject(Router);

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  get currentUserId(): string | null {
    return this.authService.getCurrentUserId();
  }

  //   deleteBook(bookId: string) {
  //     this.booksService.deleteBook(bookId);
  //   }
  // }
}
