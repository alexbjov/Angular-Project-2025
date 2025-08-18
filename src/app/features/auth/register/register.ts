import { Component, inject } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import { AuthService } from "../../../services/auth.service";

@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  private authService = inject(AuthService);
  private router = inject(Router);

  username: string = '';
  email: string = '';
  phone: string = '';
  password: string = '';
  rePassword: string = '';

  usernameError: boolean = false;
  emailError: boolean = false;
  phoneError: boolean = false;
  passwordError: boolean = false;
  rePasswordError: boolean = false;

  usernameErrorMessage: string = 'Username Error';
  emailErrorMessage: string = 'Email Error';
  phoneErrorMessage: string = 'Phone Error';
  passwordErrorMessage: string = 'Password Error';
  rePasswordErrorMessage: string = 'RePassword Error';

  validateUsername() {
    return true;
  }

  validateEmail() {
    return true;
  }

  validatePhone() {
    return true;
  }

  validatePassword() {
    return true;
  }

  validateRePassword() {
    return true;
  }

  isFormValid() {
    return true;
  }
}
