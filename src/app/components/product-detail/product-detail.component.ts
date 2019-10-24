import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from './../../models/product.class';
import { ProductService } from './../../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public product: Product = null;
  constructor(public activateRoute: ActivatedRoute, public productService: ProductService) { }

  ngOnInit() {
    // this.handleParamsBySnapShot();
    this.handleParams();
  }
  handleParamsBySnapShot() {
    const id = +this.activateRoute.snapshot.params['id'];
    this.product = this.productService.getProductById(id);
  }
  handleParams() {
    this.activateRoute.params.subscribe(data => {
      this.product = this.productService.getProductById(+data.id);
    });
  }
}
