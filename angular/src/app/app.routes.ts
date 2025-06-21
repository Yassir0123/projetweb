import { Routes } from '@angular/router';
import {ProductsComponent} from './products/products.component';
import {HomeComponent} from './home/home.component';

export const routes: Routes = [
  {path:"Home", component: HomeComponent},
  {path:"Product", component: ProductsComponent}
];
