import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [

  {
    path:'cart-list',
    component:CartComponent
  },

  {
    path:'payment-list',
    component:PaymentComponent
  },

  {
    path:'product-list',
    component:ProductsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantRoutingModule { }
