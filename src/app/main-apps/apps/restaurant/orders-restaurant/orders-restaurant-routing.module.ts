import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserOrderComponent } from './user-order/user-order.component';

const routes: Routes = [
  {
    path:'orders-restaurant-list',
    component:UserOrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRestaurantRoutingModule { }
