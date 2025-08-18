import { Routes } from '@angular/router';
import { NotFound } from "./shared/not-found/not-found";

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./features/home/home').then(c => c.Home)
  },
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login/login').then(c => c.Login)
  },
  {
    path: 'register',
    loadComponent: () => import('./features/auth/register/register').then(c => c.Register)
  },
  {
    path: 'books',
    loadComponent: () => import('./features/mybooks/books-board/books-board').then(c => c.BooksBoard)
  },
  {
    path: 'comments',
    loadComponent: () => import('./features/comments/comments-board/comments-board').then(c => c.CommentsBoard)
  },
  // {
  //   path: 'book-details',
  //   loadComponent: () => import('./features/mybooks/details').then(c => c.book-details)
  // },
  // {
  //   path: 'add-comment',
  //   loadComponent: () => import('./features/comments/new-comment/new-theme').then(c => c.NewComment)
  // },
  {
    path: '**',
    component: NotFound
  }
];
