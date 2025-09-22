import {
  ApplicationConfig,
  importProvidersFrom,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { provideToastr } from 'ngx-toastr';

import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { headersInterceptor } from './core/interceptors/headers-interceptor';
import { errorInterceptorInterceptor } from './core/interceptors/error-interceptor-interceptor';
import { loadingInterceptor } from './core/interceptors/loadingscreen-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(
      withFetch(),
      withInterceptors([
        headersInterceptor,
        errorInterceptorInterceptor,
        loadingInterceptor,
      ])
    ),
    provideToastr(), // Toastr

    provideAnimations(),
    importProvidersFrom([CookieService]),
  ],
};
