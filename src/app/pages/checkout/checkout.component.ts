import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputComponent } from '../../shared/auth/input/input.component';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart/cart.service';
import { error } from 'node:console';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule, InputComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly cartService = inject(CartService);
  private readonly router = inject(Router);
  private readonly toaster = inject(ToastrService);
  cartId: string | null = null;

  checkOutForm!: FormGroup;

  initForm(): void {
    this.checkOutForm = this.fb.group({
      shippingadress: this.fb.group({
        details: [null, [Validators.required]],
        phone: [
          null,
          [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)],
        ],
        city: [null, [Validators.required]],
      }),
    });
  }

  ngOnInit(): void {
    this.getCartId();
    this.initForm();
    console.log('cartId', this.cartId);
  }

  getCartId(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (urlParms) => {
        this.cartId = urlParms.get('id');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  submitForm(): void {
    if (this.checkOutForm.valid) {
      console.log(this.checkOutForm.value);
      this.cartService
        .checkOutSession(this.cartId, this.checkOutForm.value)
        .subscribe({
          next: (res) => {
            console.log(res);
            if (res.status === 'success') {
              window.open(res.session.url, '_self');
            }
          },
          error: (err) => {
            console.log(err);
          },
        });
    }
  }

  submitCash(): void {
    if (this.checkOutForm.valid) {
      this.cartService
        .creatCashOrder(this.cartId, this.checkOutForm.value)
        .subscribe({
          next: (res) => {
            this.toaster.success('The Order will be Delivered Tomorrow');

            this.router.navigate(['home']);
            console.log('done', res);
          },
          error: (err) => {
            console.log(err);
          },
        });
    }
  }
}
