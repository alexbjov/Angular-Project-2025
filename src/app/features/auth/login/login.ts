import { Component, inject } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import { AuthService } from "../../../services/auth.service";

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  private authService = inject(AuthService);
  private router = inject(Router);

  email: string = '';
  password: string = '';
  emailError: boolean = false;
  passwordError: boolean = false;
  emailErrorMessage: string = 'Email Error';
  passwordErrorMessage: string = 'Pass Error';

  validateEmail() {
    return true;
  }

  validatePassword() {
    return true;
  }

  isFormValid() {
    return true;
  }
}
