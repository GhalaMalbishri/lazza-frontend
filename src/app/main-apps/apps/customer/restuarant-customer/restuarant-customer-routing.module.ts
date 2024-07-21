import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewRestaurantComponent } from './view-restaurant/view-restaurant.component';

const routes: Routes = [
  {
    path:'rest',
    loadChildren: () => import('./restaurant/restaurant.module').then(m => m.RestaurantModule)
  },

  {
    path:'Viewrest-list',
    component:ViewRestaurantComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestuarantCustomerRoutingModule { }
