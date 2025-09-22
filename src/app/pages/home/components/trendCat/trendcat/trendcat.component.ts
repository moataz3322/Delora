import { Component, inject } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { TrendproductService } from '../../../../../core/services/anotherproducts/trendproduct.service';
import { Product } from '../../../../../shared/similar-product/product.interface';

@Component({
  selector: 'app-trendcat',
  imports: [CarouselModule],
  templateUrl: './trendcat.component.html',
  styleUrl: './trendcat.component.css',
})
export class TrendcatComponent {
  private readonly trend = inject(TrendproductService);

  categoryList: Product[] = this.trend.products;
  categoryOption: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    mouseDrag: true,
    touchDrag: true,
    margin: 10,
    pullDrag: false,
    dots: false,
    navSpeed: 500,
    navText: [
      '<i class="fa fa-chevron-left"></i>',
      '<i class="fa fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 3,
      },
      400: {
        items: 3,
      },
      740: {
        items: 3,
      },
      940: {
        items: 7,
      },
    },
    nav: true,
  };
}
