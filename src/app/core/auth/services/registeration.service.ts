import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class RegisterationService {
  private readonly http = inject(HttpClient);

  registerForm(data: object): Observable<any> {
    return this.http.post(environment.baseurl + 'auth/signup', data);
  }
}
