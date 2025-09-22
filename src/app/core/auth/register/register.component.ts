import { Component, inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RegisterationService } from '../services/registeration.service';
import { Router, RouterLink } from '@angular/router';
import { InputComponent } from '../../../shared/auth/input/input.component';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { BrandLoaderComponent } from '../../../shared/brand-loader/brand-loader.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, InputComponent, CommonModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  private readonly registerationService = inject(RegisterationService);
  private readonly router = inject(Router);
  private readonly toaster = inject(ToastrService);
  checkTerms!: boolean;
  errorMessage: string = '';
  successMessage: string = '';
  isLoading: boolean = false;
  registerForm!: FormGroup;
  subscribtion: Subscription = new Subscription();
  ngOnInit(): void {
    this.registerInit();
  }

  registerInit(): void {
    this.registerForm = new FormGroup(
      {
        name: new FormControl(null, [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
        ]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [
          Validators.required,
          Validators.pattern('^.{8,}$'),
        ]),
        rePassword: new FormControl(null, [Validators.required]),

        phone: new FormControl(null, [
          Validators.required,
          Validators.pattern('^01[0125][0-9]{8}$'),
        ]),
      },
      { validators: [this.confirmPass] }
    );
  }
  regSubmit(): void {
    if (this.registerForm.valid && this.checkTerms) {
      this.isLoading = true;
      this.subscribtion.unsubscribe();
      console.log(this.registerForm.value);
      this.subscribtion = this.registerationService
        .registerForm(this.registerForm.value)
        .subscribe({
          next: (res) => {
            this.successMessage = res.message;
            this.errorMessage = '';
            this.isLoading = false;
            if (res.message === 'success') {
              this.toaster.success('Register Success');
              setTimeout(() => {
                this.router.navigate(['/login']);
              }, 1000);
            }
          },
          error: (err) => {
            this.isLoading = false;
            this.errorMessage = err.error.message;
            console.log(err.error.message);
            console.log('error', err);
          },
        });
    } else {
      if (this.checkTerms === false || null) {
        this.toaster.info('Accept Our Rules');
      }
      this.registerForm.markAllAsTouched();
    }
  }

  confirmPass(group: AbstractControl) {
    if (group.get('password')?.value === group.get('rePassword')?.value) {
      return null;
    } else {
      group.get('rePassword')?.setErrors({ missmatch: true });

      return { missmatch: true };
    }
  }

  onCheckChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.checkTerms = input.checked;

    console.log(input.checked);
  }
}
