import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestAdComponent } from './request-ad/request-ad.component';

const routes: Routes = [
  {
    path:'ads-restaurant-list',
    component:RequestAdComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdsRestaurantRoutingModule { }
