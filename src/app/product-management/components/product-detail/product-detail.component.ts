import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Product } from '../../models/product.class';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  public product: Product = null;
  public subcription: Subscription;
  constructor(
    public activateRoute: ActivatedRoute,
    public productService: ProductService,
    public router: Router
    ) { }

  ngOnInit() {
    // this.handleParamsBySnapShot();
    this.handleParams();
  }
  ngOnDestroy() {
    if (this.subcription) {
      this.subcription.unsubscribe();
    }
  }
  handleParamsBySnapShot() {
    const id = +this.activateRoute.snapshot.params.id;
    this.product = this.productService.getProductById(id);
  }
  handleParams() {
    this.activateRoute.params.subscribe(data => {
      this.product = this.productService.getProductById(+data.id);
    });
  }
  onBackToList() {
    this.router.navigate(['products'], {
      relativeTo: this.activateRoute.parent
    });
  }
  onEdit() {
    this.router.navigate(['edit'], {
      relativeTo: this.activateRoute.parent
    });
  }
  onDelete() {}

}
