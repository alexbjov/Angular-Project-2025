import { Routes } from '@angular/router';
import { Login } from "./features/auth/login/login";
import { Register } from "./features/auth/register/register";
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
    path: 'logout',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFound
  }
];
