import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, FormBuilder , FormsModule } from '@angular/forms';
import { SharedModuled } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SliderComponent } from './slider/slider.component';
import {DataTableModule, SelectButtonModule, CalendarModule, TabViewModule, SharedModule,
   DialogModule , DropdownModule, MultiSelectModule, CheckboxModule, PanelModule, FileUploadModule} from 'primeng/primeng';
import { CommonServices } from './provider/common.service';
import { ProductService } from './provider/product.service';
import {UserService} from './provider/index';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';

import { UsersComponent } from './users/users.component';
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';
 import {AngularGooglePlaceModule} from 'angular-google-place';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    DataTableModule,
    MultiSelectModule,
    SharedModule,
    SelectButtonModule,
    DialogModule,
    PanelModule,
    TabViewModule,
    CheckboxModule,
    CalendarModule,
    ReactiveFormsModule,
    FormsModule,
     AngularGooglePlaceModule,
    DropdownModule,
    FileUploadModule,
    SharedModuled,
  ],
  providers: [
    CommonServices,
    ProductService,
    UserService
     ],
  declarations: [
    DashboardComponent,
     SliderComponent,
      ProductComponent,
       UsersComponent,
        ProductListComponent]
})
export class AdminModule { }
