import { Routes } from '@angular/router';
import { About } from "./features/about/about";
import { Login } from "./features/auth/login/login";
import { Register } from "./features/auth/register/register";
import { Contact } from "./features/contact/contact";
import { Home } from "./features/home/home";
import { NotFound } from "./shared/not-found/not-found";

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: Home
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
    path: 'about',
    component: About
  },
  {
    path: 'contact',
    component: Contact
  },
  {
    path: 'logout',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFound
  }
];
