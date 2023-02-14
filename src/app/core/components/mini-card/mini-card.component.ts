import { Product } from './../../Models/Product';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.scss']
})
export class MiniCardComponent {
  @Input() miniProduct: Product;
  str: string = 'تيشيرت-كم طويل-آرت وير-نسائي-ملابس';
  constructor(){
    this.miniProduct = {
      id: 1,
      title: '',
      label:'',
      image: '',
      oldPrice: 0.0,
      newPrice: 0.0,
      stars: 1
    };
  }
}
