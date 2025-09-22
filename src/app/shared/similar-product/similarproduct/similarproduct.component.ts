import { Component, inject, Input, input, OnInit } from '@angular/core';
import { Product } from '../product.interface';
import { TrendproductService } from '../../../core/services/anotherproducts/trendproduct.service';

@Component({
  selector: 'app-similarproduct',
  imports: [],
  templateUrl: './similarproduct.component.html',
  styleUrl: './similarproduct.component.css',
})
export class SimilarproductComponent implements OnInit {
  @Input() limit: number = 0;
  // products: Product[] = [
  //   {
  //     id: 1,
  //     title: 'Full Outfit',
  //     image: '/images/FullOutfit.png',
  //     price: 120,
  //     rating: 4.5,
  //   },
  //   {
  //     id: 8,
  //     title: 'Skirts',
  //     image: '/images/Skirts.png',
  //     price: 70,
  //     rating: 4.6,
  //   },
  //   { id: 7, title: 'Bags', image: '/images/Bags.png', price: 90, rating: 4.4 },
  //   {
  //     id: 5,
  //     title: 'Accssories',
  //     image: '/images/Accessories.png',
  //     price: 30,
  //     rating: 4.1,
  //   },

  //   {
  //     id: 2,
  //     title: 'MakeUp',
  //     image: '/images/MakeUp.png',
  //     price: 60,
  //     rating: 4.2,
  //   },

  //   {
  //     id: 3,
  //     title: 'Classic Shoes',
  //     image: '/images/ClassicShoes.png',
  //     price: 80,
  //     rating: 4.7,
  //   },
  //   {
  //     id: 4,
  //     title: 'Blouses',
  //     image: '/images/Blouses.png',
  //     price: 50,
  //     rating: 4.3,
  //   },

  //   {
  //     id: 6,
  //     title: 'Suits For Men',
  //     image: '/images/Suitsformen.png',
  //     price: 200,
  //     rating: 4.8,
  //   },
  // ];
  private readonly trend = inject(TrendproductService);
  products: Product[] = this.trend.products;
  clicked: boolean = true;
  ngOnInit(): void {
    this.displayCards();
  }
  toggleFav(product: Product) {
    product.isFav = !product.isFav;
  }
  displayCards(): void {
    if (this.limit === 4) {
      this.products = this.products.slice(0, 4);
    } else {
      this.products;
    }
  }
}
