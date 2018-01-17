import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SliderComponent } from './slider/slider.component';
import {ProductComponent} from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'slider',
        component: SliderComponent
      },
      {
        path: 'product',
        component: ProductComponent
      },
      {
       path: 'editproducts',
       component: ProductListComponent
      },
      {
        path: 'users',
        component: UsersComponent
       }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }





export const routing: ModuleWithProviders = RouterModule.forChild(routes);
