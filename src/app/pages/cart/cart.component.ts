import {
  Component,
  inject,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { CartService } from './cart.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Cart } from './cart.interface';
import { error, count } from 'console';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [RouterLink, DatePipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  private readonly coockie = inject(CookieService);
  private readonly cartService = inject(CartService);
  private readonly http = inject(HttpClient);
  cartList: Cart = {} as Cart;

  addToCart(productId: string): void {
    this.cartService.addToCart(productId);
  }
  ngOnInit(): void {
    this.getLoggedUserData();
  }

  getLoggedUserData(): void {
    this.cartService.getCart().subscribe({
      next: (res) => {
        this.cartList = res.data;

        console.log(res.data);
      },
    });
  }

  removeItem(id: string): void {
    this.cartService.removeSCart(id).subscribe({
      next: (res) => {
        this.cartService.countNum.set(res.numOfCartItems);
        console.log(res);
        this.cartList = res.data;
      },

      error: (err) => {
        console.log(err);
      },
    });
  }

  updateCount(id: string, count: number): void {
    this.cartService.updateCount(id, count).subscribe({
      next: (res) => {
        console.log(res);
        this.cartList = res.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
