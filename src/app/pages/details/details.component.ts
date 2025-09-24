import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsService } from './details.service';
import { SimilarproductComponent } from '../../shared/similar-product/similarproduct/similarproduct.component';
import { CartService } from '../cart/cart.service';
import { Router } from 'express';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-details',
  imports: [SimilarproductComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  // todo    activated route 34an as7b mn al url al data al 3ayzha (Id)
  // productDetails: Product = {} as Product;
  // id: string | null = null;
  // private readonly detailsService = inject(DetailsService);
  // private readonly activatedRoute = inject(ActivatedRoute);
  // ngOnInit(): void {
  // this.getProductId();
  // this.getProductDetails();
  // }

  // getProductId(): void {
  //   this.activatedRoute.paramMap.subscribe({
  //     next: (urlParams) => {
  //       this.id = urlParams.get('id');

  //       console.log(this.id + ' prop al 4ayl al id');
  //     },
  //   });
  // }

  // getProductDetails(): void {
  //   this.detailsService.getProductDetails(this.id).subscribe({
  //     next: (res) => {
  //       this.productDetails = res.data;
  //       console.log(res.data + ' al data al htegy');
  //     },
  //   });
  // }
  id: string | null = null;
  productList: Product = {} as Product;
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly detailsService = inject(DetailsService);
  private readonly cartService = inject(CartService);
  private readonly toastrService = inject(ToastrService);
  ngOnInit(): void {
    this.getId();
    this.getDetails();
  }

  getId(): any {
    this.activatedRoute.paramMap.subscribe({
      next: (urlparm) => {
        this.id = urlparm.get('id');
      },
    });
  }
  getDetails(): void {
    this.detailsService.getProductDetails(this.id).subscribe({
      next: (res) => {
        console.log(res.data);
        this.productList = res.data;
      },
    });
  }

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
