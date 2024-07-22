import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestuarantCustomerRoutingModule } from './restuarant-customer-routing.module';
import { ViewRestaurantComponent } from './view-restaurant/view-restaurant.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [
    ViewRestaurantComponent,
    ProductsComponent,
    CartComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    RestuarantCustomerRoutingModule
  ]
})
export class RestuarantCustomerModule { }
