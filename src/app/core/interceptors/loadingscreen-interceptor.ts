import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';
import { LoadingService } from '../../shared/brand-loader/loading.service';
import { CheckfirstService } from '../../shared/brand-loader/checkfirst.service';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);
  const checkfirstService = inject(CheckfirstService);

  loadingService.showLoader();

  return next(req).pipe(
    finalize(() => {
      if (
        req.url.includes('categories') ||
        req.url.includes('products') ||
        checkfirstService.isFirstVisit()
      ) {
        console.log('if works');
        setTimeout(() => {
          checkfirstService.setFirstVisit();

          loadingService.hideLoader();
        }, 1000);
      } else {
        console.log('else works');
        console.log('req', req.url);

        loadingService.hideLoader();
      }
    })
  );
};

//todo msh hy4t8l lazm t3dlha fe al service
