import { Injectable } from '@angular/core';
import { Product } from '../models/product.class';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public products: Product[] = [
    {
      id: 1,
      name: 'Iphone X',
      price: 1000,
      status: true
    },
    {
      id: 2,
      name: 'Iphone 11',
      price: 1200,
      status: false
    },
    {
      id: 3,
      name: 'Samsung Note 10',
      price: 1200,
      status: true
    },
    {
      id: 4,
      name: 'Samsung Galaxy S10',
      price: 900,
      status: true
    },
  ];
  constructor() { }

  getAllProducts = () => {
    return this.products;
  }
  getProductById = (id: number) => {
    let result = null;
    this.products.forEach(product => {
      if ( product.id === id) {
        result = product;
      }
    });
    return result;
  }
}
