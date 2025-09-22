import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router, RouterLink } from '@angular/router';
import { InputComponent } from '../../../shared/auth/input/input.component';
import { CookieService } from 'ngx-cookie-service';
import { BrandLoaderComponent } from '../../../shared/brand-loader/brand-loader.component';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, InputComponent, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  errorMessage: string = '';

  isLoading: boolean = false;
  private readonly fb = inject(FormBuilder);
  private readonly loginService = inject(LoginService);
  private readonly router = inject(Router);
  private readonly cookieService = inject(CookieService);
  // todo: add form validation
  loginForm: FormGroup = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required]],
  });

  loginSubmit(): void {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.isLoading = true;
      this.loginService.login(this.loginForm.value).subscribe({
        next: (res) => {
          if (res.message === 'success') {
            this.cookieService.set('token', res.token);
            this.isLoading = false;
            this.router.navigate(['/delora']);
            console.log(this.loginForm.value);
            console.log('aloooo', res);
          }
        },

        error: (err) => {
          this.isLoading = false;
          this.errorMessage = err.error.message;
          console.log(err.error.message);
        },
      });
    }
  }
}
