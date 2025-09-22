import { HttpClient } from '@angular/common/http';
import {
  computed,
  inject,
  Injectable,
  signal,
  WritableSignal,
} from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable } from 'rxjs';
import { count } from 'console';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly http = inject(HttpClient);
  private readonly cookieS = inject(CookieService);
  countNum: WritableSignal<number> = signal(0);

  addToCart(productId: string): Observable<any> {
    return this.http.post(environment.baseurl + 'cart', {
      productId: productId,
    });
  }

  getCart(): Observable<any> {
    return this.http.get(environment.baseurl + 'cart');
  }

  removeSCart(id: string): Observable<any> {
    return this.http.delete(environment.baseurl + `cart/${id}`);
  }

  updateCount(id: string, count: number): Observable<any> {
    return this.http.put(environment.baseurl + `cart/${id}`, {
      count: count,
    });
  }

  checkOutSession(cartId: string | null, cartValue: object): Observable<any> {
    return this.http.post(
      environment.baseurl +
        `orders/checkout-session/${cartId}?url=http://localhost:4200`,
      { cartValue } // هنا لو معندكش body
    );
  }

  creatCashOrder(cartId: string | null, cartValue: object): Observable<any> {
    return this.http.post(
      environment.baseurl + `orders/${cartId}`,
      { cartValue } // هنا لو معندكش body
    );
  }
}
