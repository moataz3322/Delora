import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsService } from './details.service';

@Component({
  selector: 'app-details',
  imports: [],
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
        this.productList = res.data;
      },
    });
  }
}
