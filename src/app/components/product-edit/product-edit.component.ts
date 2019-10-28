import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from './../../models/product.class';
import { Subscription } from 'rxjs';
import { ProductService } from './../../services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit, OnDestroy {
  public product: Product  = null;
  public subcription: Subscription = null;

  constructor(
    public activateRoute: ActivatedRoute,
    public productService: ProductService
    ) {

  }

  ngOnInit() {
    this.handleParams();
  }

  ngOnDestroy() {
    if (this.subcription) {
      this.subcription.unsubscribe();
    }
  }

  handleParams() {
    this.subcription = this.activateRoute.parent.params.subscribe((params: Params) => {
      const id = params.id;
      this.product = this.productService.getProductById(+id);
      console.log(this.product);
    });
  }
}
