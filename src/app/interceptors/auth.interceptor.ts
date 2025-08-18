import { HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { AuthService } from "../services/auth.service";

export const AuthenticationInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);

  const token = localStorage.getItem('currentUser')

  const authenticationRequest = req.clone({
    setHeaders: {
      'Content-Type': 'application/json',
      // 'X-Authorization': token,
    }
  });

  return next(authenticationRequest);
}
