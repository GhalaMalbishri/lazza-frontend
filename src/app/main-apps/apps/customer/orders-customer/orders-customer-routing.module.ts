import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentOrdersComponent } from './current-orders/current-orders.component';
import { PreviouseOrdersComponent } from './previouse-orders/previouse-orders.component';

const routes: Routes = [
  {
    path:'currentOrder-list',
    component:CurrentOrdersComponent
  },
  {
    path:'previousOrder-list',
    component:PreviouseOrdersComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersCustomerRoutingModule { }
