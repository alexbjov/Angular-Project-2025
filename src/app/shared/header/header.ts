import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
  changeDetection: ChangeDetectionStrategy.Default
})
export class Header {
  authService = inject(AuthService);
  currentUser = this.authService.currentUser();
  isLogged = this.authService.isLoggedIn();
}
