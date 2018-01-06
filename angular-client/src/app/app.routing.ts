import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import { NgModule } from '@angular/core';

import { HomePageComponent } from './landing/home.component';

import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import {ProductCatComponent} from './product/productlist/productlist.component';
import {CheckoutComponent} from './cart/checkout/checkout.component';



export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home', component: HomePageComponent },
    { path: 'products', component: ProductListComponent },
    { path: 'product/:id', component: ProductDetailComponent },
    { path: 'product/:id', component: ProductDetailComponent },
    {path: 'productlist', component: ProductCatComponent},
    {path: 'checkout', component: CheckoutComponent},
    // loading modules
    { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule' },
    // otherwise redirect to home
    { path: '**', redirectTo: 'home' }
];


export const routing = RouterModule.forRoot(appRoutes);


