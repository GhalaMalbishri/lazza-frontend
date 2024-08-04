import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechSupportRestaurantRoutingModule } from './tech-support-restaurant-routing.module';
import { CustToRestaurantComponent } from './cust-to-restaurant/cust-to-restaurant.component';
import { RestaurantToAdminComponent } from './restaurant-to-admin/restaurant-to-admin.component';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CustToRestaurantComponent,
    RestaurantToAdminComponent
  ],
  imports: [
    CommonModule,
    TechSupportRestaurantRoutingModule,
    SharedComponentsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TechSupportRestaurantModule { }
