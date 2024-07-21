import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRestaurantRoutingModule } from './orders-restaurant-routing.module';
import { UserOrderComponent } from './user-order/user-order.component';


@NgModule({
  declarations: [
    UserOrderComponent
  ],
  imports: [
    CommonModule,
    OrdersRestaurantRoutingModule,
  ]
})
export class OrdersRestaurantModule { }
