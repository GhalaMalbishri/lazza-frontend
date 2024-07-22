import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewRestaurantComponent } from './view-restaurant/view-restaurant.component';
import { CartComponent } from './restaurant/cart/cart.component';

const routes: Routes = [
  {
    path:"view",
    component:ViewRestaurantComponent
  },

  {
    path:"cart",
    component:CartComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestuarantCustomerRoutingModule { }
