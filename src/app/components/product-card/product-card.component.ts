import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  @Input() product!: Product;
  @Output() addToCart = new EventEmitter<Product>();

  handleClick() {
    debugger;
    this.addToCart.emit(this.product);
  }
}
