import { ProductsService } from './../../../../core/services/products/products.service';
import { Component, inject, OnInit } from '@angular/core';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-main-slider',
  imports: [CarouselModule],
  templateUrl: './main-slider.component.html',
  styleUrl: './main-slider.component.css',
})
export class MainSliderComponent {
  product: Product[] = [];
  MainSlider: OwlOptions = {
    loop: true,
    autoplay: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    dots: true,
    navSpeed: 700,
    navText: [
      '<i class="fa fa-chevron-left"></i>',
      '<i class="fa fa-chevron-right"></i>',
    ],
    items: 1,
    nav: true,
  };
}
