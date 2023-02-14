import { Product } from './../../Models/Product';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() product: Product;

  constructor() {
    this.product = {
      id: 1,
      title: '',
      label: '',
      image: '',
      oldPrice: 0.0,
      newPrice: 0.0,
      stars: 1,
    };
  }
}
