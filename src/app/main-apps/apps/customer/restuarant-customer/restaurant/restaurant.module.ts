import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantRoutingModule } from './restaurant-routing.module';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [
    ProductsComponent,
    CartComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    RestaurantRoutingModule
  ]
})
export class RestaurantModule { }
