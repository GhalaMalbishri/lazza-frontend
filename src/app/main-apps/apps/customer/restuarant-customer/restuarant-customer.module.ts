import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestuarantCustomerRoutingModule } from './restuarant-customer-routing.module';
import { ViewRestaurantComponent } from './view-restaurant/view-restaurant.component';


@NgModule({
  declarations: [
    ViewRestaurantComponent
  ],
  imports: [
    CommonModule,
    RestuarantCustomerRoutingModule
  ]
})
export class RestuarantCustomerModule { }
