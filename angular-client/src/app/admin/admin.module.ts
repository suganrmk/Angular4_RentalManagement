import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, FormBuilder , FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SliderComponent } from './slider/slider.component';
import {DataTableModule, SelectButtonModule, CalendarModule, TabViewModule, SharedModule,
   DialogModule , DropdownModule, CheckboxModule, PanelModule, FileUploadModule} from 'primeng/primeng';
import { CommonServices } from './provider/common.service';
import { ProductComponent } from './product/product.component';
import { UsersComponent } from './users/users.component';
 import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    DataTableModule,
    SharedModule,
    SelectButtonModule,
    DialogModule,
    PanelModule,
    TabViewModule,
    CheckboxModule,
    CalendarModule,
    ReactiveFormsModule,
    FormsModule,
    DropdownModule,
    FileUploadModule,
  ],
  providers: [
    CommonServices
     ],
  declarations: [DashboardComponent, SliderComponent, ProductComponent, UsersComponent]
})
export class AdminModule { }


// import { NgModule } from '@angular/core';
// import { AdminRoutingModule } from './admin-routing.module';
// import { DashboardComponent } from './dashboard/dashboard.component';

// @NgModule({
//   imports: [AdminRoutingModule],
//   declarations: [DashboardComponent]
// })
// export class LazyModule {}
