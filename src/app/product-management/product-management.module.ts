import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';

import { productRoutes } from './product-management.routes';
import { ProductService } from './services/product.service';
import { AuthGuard } from './services/guards/auth.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailComponent,
    ProductListComponent,
    ProductEditComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(productRoutes),

  ],
  providers: [
    ProductService, AuthGuard
  ]
})
export class ProductManagementModule { }
