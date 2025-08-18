import { HttpErrorResponse, HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { catchError, throwError } from "rxjs";
import { ErrorService } from "../services/error.service";

export const ErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const errorService = inject(ErrorService);

  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      let errorMessage = '';

      if (err.error instanceof ErrorEvent) {
        errorMessage = err.error.message;
      } else {
        errorMessage = err.error?.message || "Server-side error";
      }

      errorService.setError(errorMessage);
      return throwError(() => err);
    })
  );
};
