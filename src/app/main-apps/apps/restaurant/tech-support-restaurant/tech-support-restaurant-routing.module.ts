import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustToRestaurantComponent } from './cust-to-restaurant/cust-to-restaurant.component';

const routes: Routes = [
  {
    path: 'cust-to-restaurant',
    component:CustToRestaurantComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechSupportRestaurantRoutingModule { }
