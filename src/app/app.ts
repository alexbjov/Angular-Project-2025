import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from "./services/auth.service";
import { BooksService } from "./services/books.service";
import { CommentsService } from "./services/comments.service";
import { Footer } from "./shared/footer/footer";
import { Header } from "./shared/header/header";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
  providers: [AuthService, BooksService, CommentsService]
})
export class App {
  protected readonly title = signal('fan-books-club');
}
