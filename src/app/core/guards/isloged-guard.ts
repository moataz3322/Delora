import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const islogedGuard: CanActivateFn = (route, state) => {
  const coockie = inject(CookieService);
  const router = inject(Router);
  if (coockie.get('token')) {
    return router.parseUrl('/home');
  } else {
    return true;
  }
};
