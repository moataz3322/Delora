import { HttpClient } from '@angular/common/http';
import { Component, inject, input, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products/products.service';
import { CardComponent } from '../../shared/components/card/card.component';
import { MainSliderComponent } from './components/main-slider/main-slider.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { SimilarproductComponent } from '../../shared/similar-product/similarproduct/similarproduct.component';
import { ChekclandingpageService } from '../../shared/components/navbar/chekclandingpage.service';
import { TrendcatComponent } from './components/trendCat/trendcat/trendcat.component';
import { ServicesComponent } from '../services/services.component';
import { ContactMeComponent } from '../../shared/components/contact-me/contact-me.component';
import { BrandLoaderComponent } from '../../shared/brand-loader/brand-loader.component';

@Component({
  selector: 'app-home',
  imports: [
    CardComponent,
    MainSliderComponent,
    SimilarproductComponent,
    TrendcatComponent,
    ServicesComponent,
    ContactMeComponent,
    BrandLoaderComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, OnDestroy {
  private checkLanding = inject(ChekclandingpageService);

  productList: Product[] = [];
  private readonly products = inject(ProductsService);

  ngOnInit(): void {
    this.getProducts();
    this.checkLanding.setLanding(false);
  }
  ngOnDestroy(): void {
    this.checkLanding.setLanding(true);
  }
  getProducts(): void {
    this.products.getAllProducts().subscribe({
      next: (res) => {
        this.productList = res.data;
        console.log(res);
        console.log(res.data);
      },
    });
  }
}
