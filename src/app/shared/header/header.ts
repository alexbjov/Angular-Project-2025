import { Component, inject } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  authService = inject(AuthService);
  router = inject(Router);

  readonly isLogged = this.authService.isLoggedIn;
  readonly currentUser = this.authService.currentUser;

  logout(): void {
    this.authService.logout().subscribe({
      next: () => {
        this.router.navigate(['/home']);
      },
      error: (err) => {
        localStorage.removeItem('currentUser');
        console.log('Logout failed', err);
        this.router.navigate(['/login']);
      }
    });
  }
}
