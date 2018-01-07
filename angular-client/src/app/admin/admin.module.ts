import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';

import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, FormBuilder , FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SliderComponent } from './slider/slider.component';
import {DataTableModule, TabViewModule, SharedModule , DialogModule , PanelModule} from 'primeng/primeng';
import { CommonServices } from './provider/common.service';
import { ProductComponent } from './product/product.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    DataTableModule,
    SharedModule,
    DialogModule,
    PanelModule,
    TabViewModule,
    ReactiveFormsModule,
    FormsModule
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
