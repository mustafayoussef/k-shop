import { ProductsService } from './../../core/services/products.service';
import { Product } from './../../core/Models/Product';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  cover = [''];
  products: Product[] = [];
  miniProducts: Product[] = [];

  constructor(private productsService: ProductsService) {
    this.getProducts();
    this.getMiniProducts();
  }

  getProducts() {
    this.productsService.getProducts().subscribe((products) => {
      for (let i = 0; i < products.length; i++) {
        this.products = products;
      }
    });
  }

  getMiniProducts() {
    this.productsService.getMiniProducts().subscribe((products) => {
      for (let i = 0; i < products.length; i++) {
        this.miniProducts = products;
      }
    });
  }
}
