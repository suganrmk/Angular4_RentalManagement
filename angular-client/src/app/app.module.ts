// ./angular-client/src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';

import { routing } from './app.routing';

import { customHttpProvider } from './_helpers/index';
import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService , CartService } from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';


import { AppComponent } from './app.component';
import { HomePageComponent } from './landing/home.component';
import {HeaderComponent} from './header/header.component';
import { ProductRoutingModule } from './product/product-routing/product-routing.module';
import { ProductService } from './product/product.service';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import {ProductsingleComponent} from './product/product-single/product-single.component';
import {ProductarrayComponent} from './product/product-array/product-array.component';
import {CartComponent} from './cart/cart/cart.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductListComponent,
    ProductDetailComponent,
    AlertComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    ProductsingleComponent,
    ProductarrayComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ProductRoutingModule,
    FormsModule,
    routing,
  ],
  providers: [
     ProductService,
     customHttpProvider,
     AuthGuard,
     AlertService,
     CartService,
     AuthenticationService,
     UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
