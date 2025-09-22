import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly http = inject(HttpClient);
  private readonly coockie = inject(CookieService);
  private readonly router = inject(Router);

  login(data: object): Observable<any> {
    return this.http.post(environment.baseurl + 'auth/signin', data);
  }
  // verifyToken(): Observable<any> {
  //   return this.http.get(environment.baseurl + `auth/verifyToken`);
  // }
  logOut(): void {
    this.coockie.delete('token');
    this.router.navigate(['/login']);
  }

  // decodeToken(): void {
  //   return jwtDecode(this.coockie.get('token'));
  // }
}
