import { Subscription } from 'rxjs';
import { Component, inject, Input, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CartService } from '../../../pages/cart/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-card',
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  private readonly cartService = inject(CartService);
  private readonly router = inject(Router);
  private readonly toastrService = inject(ToastrService);

  @Input({ required: true }) product: Product = {} as Product;

  addProductToCard(productId: string): void {
    this.cartService.addToCart(productId).subscribe({
      next: (res) => {
        this.cartService.countNum.set(res.numOfCartItems);
        console.log('7madaaa', this.cartService.countNum);
        // this.router.navigate(['/cart']);
        console.log(res);
        console.log(productId);
        this.toastrService.success(res.message, 'Delora', {
          closeButton: true,
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
