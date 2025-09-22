import { Injectable } from '@angular/core';
import { Product } from '../../../shared/similar-product/product.interface';

@Injectable({
  providedIn: 'root',
})
export class TrendproductService {
  products: Product[] = [
    {
      id: 1,
      title: 'Full Outfit',
      image: '/images/FullOutfit.png',
      price: 12000,
      rating: 4.5,
      isFav: false,
    },
    {
      id: 8,
      title: 'Skirts',
      image: '/images/Skirts.png',
      price: 3000,
      rating: 4.6,
      isFav: false,
    },
    {
      id: 7,
      title: 'Bags',
      image: '/images/Bags.png',
      price: 6000,
      rating: 4.4,
      isFav: false,
    },
    {
      id: 5,
      title: 'Accssories',
      image: '/images/Accessories.png',
      price: 2500,
      rating: 4.1,
      isFav: false,
    },

    {
      id: 2,
      title: 'MakeUp',
      image: '/images/MakeUp.png',
      price: 6999,
      rating: 4.2,
      isFav: false,
    },

    {
      id: 3,
      title: 'Classic Shoes',
      image: '/images/ClassicShoes.png',
      price: 5000,
      rating: 4.7,
      isFav: false,
    },
    {
      id: 4,
      title: 'Blouses',
      image: '/images/Blouses.png',
      price: 9000,
      rating: 4.3,
      isFav: false,
    },

    {
      id: 6,
      title: 'Suits For Men',
      image: '/images/Suitsformen.png',
      price: 7000,
      rating: 4.8,
      isFav: false,
    },
  ];
}
