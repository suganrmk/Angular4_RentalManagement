// ./angular-client/src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { routing } from './app.routing';

import { customHttpProvider } from './_helpers/index';
import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService ,
         CartService, CommonService} from './_services/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';


import {AppComponent} from './app.component';
import {HomePageComponent} from './landing/home.component';
import {HeaderComponent} from './header/header.component';
import {ProductCatComponent} from './product/productlist/productlist.component';
import {ProductDetailComponent} from './product/product-detail/product-detail.component';
import {ProductsingleComponent} from './product/product-single/product-single.component';
import {ProductarrayComponent} from './product/product-array/product-array.component';
import {CartComponent} from './cart/cart/cart.component';
import {CheckoutComponent} from './cart/checkout/checkout.component';
import {FileUploadModule} from 'primeng/primeng';

import {DataTableModule, CarouselModule, SelectButtonModule, CalendarModule, TabViewModule, SharedModule,
         DialogModule , DropdownModule, CheckboxModule, PanelModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductDetailComponent,
    AlertComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    ProductsingleComponent,
    ProductarrayComponent,
    ProductCatComponent,
    CartComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    routing,
    DropdownModule,
    FileUploadModule,
    CarouselModule
  ],
  providers: [
     customHttpProvider,
     AuthGuard,
     AlertService,
     CartService,
     AuthenticationService,
     CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
