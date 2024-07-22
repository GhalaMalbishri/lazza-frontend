import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdsRestaurantRoutingModule } from './ads-restaurant-routing.module';
import { RequestAdComponent } from './request-ad/request-ad.component';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';


@NgModule({
  declarations: [
    RequestAdComponent
  ],
  imports: [
    CommonModule,
    AdsRestaurantRoutingModule,
    SharedComponentsModule
  ]
})
export class AdsRestaurantModule { }
