import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewRestaurantComponent } from './view-restaurant/view-restaurant.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [

  {
    path:'customerViewRest-list',
    component:ViewRestaurantComponent
  },

  {
    path:'customerProducts-list',
    component:ProductsComponent
  },

  {
    path:'customerCart-list',
    component:CartComponent
  },

  {
    path:'customerPayment-list',
    component:PaymentComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestuarantCustomerRoutingModule { }
