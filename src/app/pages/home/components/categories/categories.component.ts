import { Component, inject, OnInit } from '@angular/core';
import { CategoriesService } from '../../../../core/services/categories/categories.service';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-categories',
  imports: [CarouselModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent implements OnInit {
  categoryList: Category[] = [];

  private readonly Categories = inject(CategoriesService);

  ngOnInit(): void {
    this.getCategories();
  }
  getCategories(): void {
    this.Categories.getAllCategory().subscribe({
      next: (res) => {
        console.log('cat data');
        console.log(res.data);
        this.categoryList = res.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  categoryOption: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 20000,
    autoplayHoverPause: true,
    mouseDrag: true,
    touchDrag: true,
    margin: 10,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['Previous', 'Next'],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 6,
      },
    },
    nav: false,
  };
}
