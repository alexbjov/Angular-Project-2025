import { Routes } from '@angular/router';
import { About } from "./features/about/about";
import { Login } from "./features/auth/login/login";
import { Register } from "./features/auth/register/register";
import { Contact } from "./features/contact/contact";
import { authGuard } from "./guards/auth.guard";
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
    path: 'about',
    component: About
  },
  {
    path: 'contact',
    component: Contact
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'register',
    component: Register
  },
  {
    path: 'logout',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'profile',
    loadComponent: () => import('./features/profile/profile').then(c => c.Profile),
    canActivate: [authGuard]
  },
  {
    path: 'books',
    loadComponent: () => import('./features/mybooks/books-board/books-board').then(c => c.BooksBoard)
  },
  {
    path: 'add-book',
    loadComponent: () => import('./features/mybooks/add-book/add-book').then(c => c.AddBook),
    canActivate: [authGuard]
  },
  {
    path: '**',
    component: NotFound
  }
];
