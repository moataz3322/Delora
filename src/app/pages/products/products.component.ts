import { Component, inject } from '@angular/core';
import { ProductsService } from '../../core/services/products/products.service';
import { CardComponent } from '../../shared/components/card/card.component';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module

@Component({
  selector: 'app-products',
  imports: [CardComponent, NgxPaginationModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  pagesize!: number;
  p!: number;
  total!: number;
  productList: Product[] = [];
  private readonly products = inject(ProductsService);

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(pagenumber: number = 1): void {
    this.products.getAllProducts(pagenumber).subscribe({
      next: (res) => {
        this.pagesize = res.metadata.limit;
        this.p = res.metadata.currentPage;
        this.total = res.results;
        this.productList = res.data;
        console.log(res);
        console.log(res.data);
      },
    });
  }

  pageChanged(page: number): void {}
}
