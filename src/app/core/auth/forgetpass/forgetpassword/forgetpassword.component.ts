import { Component, inject, OnInit } from '@angular/core';
import { InputComponent } from '../../../../shared/auth/input/input.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { verify } from 'crypto';
import { Router, RouterLink } from '@angular/router';
import { ForgetpassService } from '../../services/forgetpass.service';

import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-forgetpassword',
  imports: [InputComponent, ReactiveFormsModule],
  templateUrl: './forgetpassword.component.html',
  styleUrl: './forgetpassword.component.css',
})
export class ForgetpasswordComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly forgetpassService = inject(ForgetpassService);
  private readonly router = inject(Router);
  private readonly cookieService = inject(CookieService);

  verifyEmail!: FormGroup;
  verifyCode!: FormGroup;
  resetPass!: FormGroup;
  step: number = 1;
  ngOnInit(): void {
    this.initForm();
  }
  initForm(): void {
    this.verifyEmail = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
    });

    this.verifyCode = this.fb.group({
      resetCode: [null, [Validators.required]],
    });
    this.resetPass = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      newPassword: [null, [Validators.required, Validators.pattern('^.{8,}$')]],
    });
  }

  formStepOne(): void {
    if (this.verifyEmail.valid) {
      this.forgetpassService
        .submitVerifyEmail(this.verifyEmail.value)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.step = 2;
          },
        });
    }
  }
  formStepTwo(): void {
    if (this.verifyCode.valid) {
      this.forgetpassService.submitVerifyCode(this.verifyCode.value).subscribe({
        next: (res) => {
          console.log(res);
          this.step = 3;
        },
      });
    }
  }
  formStepThree(): void {
    if (this.resetPass.valid) {
      this.forgetpassService.submitResetPass(this.resetPass.value).subscribe({
        next: (res) => {
          this.cookieService.set('token', res.token);
          this.router.navigate(['/login']);
        },
      });
    }
  }
}
