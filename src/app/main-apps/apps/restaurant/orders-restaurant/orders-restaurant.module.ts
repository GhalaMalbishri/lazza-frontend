import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRestaurantRoutingModule } from './orders-restaurant-routing.module';
import { UserOrderComponent } from './user-order/user-order.component';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';


@NgModule({
  declarations: [
    UserOrderComponent
  ],
  imports: [
    CommonModule,
    OrdersRestaurantRoutingModule,
    SharedComponentsModule
  ]
})
export class OrdersRestaurantModule { }
