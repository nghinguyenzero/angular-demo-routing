import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from './../../services/product.service';
import { Product } from './../../models/product.class';
import { Router, ActivatedRoute } from '@angular/router';
import {  Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  public products: Product[] = [];
  public name: string ;
  public price: number;
  public queryParamsSubcription: Subscription;

  constructor(
    public productServiece: ProductService,
    public routerServiece: Router,
    public activatedRoute: ActivatedRoute
    ) { }
  ngOnInit() {
    this.queryParamsSubcription = this.activatedRoute.queryParams.subscribe(data => {
      const name = data[`name`];
      const price = +data[`price`];
      this.name = name;
      this.price = price;
      this.products = this.productServiece.getAllProducts(name, price);
    });
    this.products = this.productServiece.getAllProducts();
  }
  onSearch() {
    this.routerServiece.navigate(['/products'], {queryParams: {name: this.name ? this.name : '', price: this.price ? this.price : ''}});
  }
  ngOnDestroy() {
    if (this.queryParamsSubcription) {
      this.queryParamsSubcription.unsubscribe();
    }
  }
}
