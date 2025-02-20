import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  private products: Product[] = 
  [
    {
      "id": 1,
      "name": "Laptop",
      "description": "High-performance laptop with the latest processor.",
      "price": 999.99
    },
    {
      "id": 2,
      "name": "Smartphone",
      "description": "Latest smartphone with an advanced camera and 5G support.",
      "price": 699.99
    },
    {
      "id": 3,
      "name": "Wireless Headphones",
      "description": "Noise-canceling wireless headphones with long battery life.",
      "price": 199.99
    },
    {
      "id": 4,
      "name": "Smartwatch",
      "description": "Feature-rich smartwatch with health tracking and notifications.",
      "price": 149.99
    },
    {
      "id": 5,
      "name": "Gaming Mouse",
      "description": "Ergonomic gaming mouse with customizable RGB lighting.",
      "price": 49.99
    },
    {
      "id": 6,
      "name": "Mechanical Keyboard",
      "description": "RGB mechanical keyboard with tactile switches.",
      "price": 89.99
    },
    {
      "id": 7,
      "name": "4K Monitor",
      "description": "Ultra HD 4K monitor with a high refresh rate.",
      "price": 399.99
    },
    {
      "id": 8,
      "name": "Bluetooth Speaker",
      "description": "Portable Bluetooth speaker with deep bass and waterproof design.",
      "price": 129.99
    },
    {
      "id": 9,
      "name": "External Hard Drive",
      "description": "2TB external hard drive for secure and fast data storage.",
      "price": 119.99
    },
    {
      "id": 10,
      "name": "Webcam",
      "description": "1080p HD webcam with built-in microphone for video calls.",
      "price": 79.99
    }
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductById(id: number): Observable<Product | undefined> {
    return of(this.products.find(product => product.id === id));
  }
}
