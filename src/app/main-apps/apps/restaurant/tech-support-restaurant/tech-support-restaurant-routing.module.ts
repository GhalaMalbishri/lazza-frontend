import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustToRestaurantComponent } from './cust-to-restaurant/cust-to-restaurant.component';
import { RestaurantToAdminComponent } from './restaurant-to-admin/restaurant-to-admin.component';

const routes: Routes = [
  {
    path: 'cust-to-restaurant-list',
    component:CustToRestaurantComponent
  },
  {
    path: 'restaurant-to-admin-list',
    component:RestaurantToAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechSupportRestaurantRoutingModule { }
