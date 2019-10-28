import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { LoginComponent } from './components/login/login.component';
import { AccessGuard } from './services/guards/access.guard';
import { ProductManagementModule } from './product-management/product-management.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full',
  },
  {
    path: 'index',
    component: HomeComponent,
    canDeactivate: [AccessGuard]
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ProductManagementModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [AccessGuard]
})
export class AppRoutingModule { }
