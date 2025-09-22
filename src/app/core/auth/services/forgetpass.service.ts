import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ForgetpassService {
  private readonly http = inject(HttpClient);

  submitVerifyEmail(data: object): Observable<any> {
    return this.http.post(environment.baseurl + 'auth/forgotPasswords', data);
  }
  submitVerifyCode(data: object): Observable<any> {
    return this.http.post(environment.baseurl + 'auth/verifyResetCode', data);
  }
  submitResetPass(data: object): Observable<any> {
    return this.http.put(environment.baseurl + 'auth/resetPassword', data);
  }
}
