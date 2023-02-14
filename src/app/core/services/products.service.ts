import { Product } from './../Models/Product';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/assets/data/products.json');
  }

  getMiniProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/assets/data/mini-products.json');
  }
}
