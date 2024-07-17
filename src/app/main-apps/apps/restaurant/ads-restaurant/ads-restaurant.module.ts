import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdsRestaurantRoutingModule } from './ads-restaurant-routing.module';
import { RequestAdComponent } from './request-ad/request-ad.component';


@NgModule({
  declarations: [
    RequestAdComponent
  ],
  imports: [
    CommonModule,
    AdsRestaurantRoutingModule
  ]
})
export class AdsRestaurantModule { }
