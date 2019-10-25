import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from 'src/app/models/product.class';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

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
