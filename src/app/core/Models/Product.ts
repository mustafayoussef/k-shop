export class Product {
  id: number;
  title: string;
  label: string;
  oldPrice: number;
  newPrice: number;
  stars: number;
  image: string;
  constructor() {
    this.id = 1;
    this.title = '';
    this.label = '';
    this.oldPrice = 0.0;
    this.newPrice = 0.0;
    this.image = '';
    this.stars = 1;
  }
}
