import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersCustomerRoutingModule } from './orders-customer-routing.module';
import { CurrentOrdersComponent } from './current-orders/current-orders.component';
import { PreviouseOrdersComponent } from './previouse-orders/previouse-orders.component';


@NgModule({
  declarations: [
    CurrentOrdersComponent,
    PreviouseOrdersComponent
  ],
  imports: [
    CommonModule,
    OrdersCustomerRoutingModule
  ]
})
export class OrdersCustomerModule { }
