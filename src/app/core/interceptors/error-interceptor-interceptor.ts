import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';

export const errorInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const toastrService = inject(ToastrService);
  return next(req).pipe(
    catchError((err) => {
      //error Logic
      console.log('interceptor', err);

      if (req.url.includes('auth')) {
        console.log('if error inter works');
        setTimeout(() => {
          toastrService.error(err.error.message);
        }, 5000);
      } else {
        console.log('else error inter works');

        toastrService.error(err.error.message);
      }
      return throwError(() => err);
    })
  );
};
