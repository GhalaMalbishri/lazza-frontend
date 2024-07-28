import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantProfileRoutingModule } from './restaurant-profile-routing.module';
import { RestProfileListComponent } from './rest-profile-list/rest-profile-list.component';


@NgModule({
  declarations: [
    RestProfileListComponent
  ],
  imports: [
    CommonModule,
    RestaurantProfileRoutingModule
  ]
})
export class RestaurantProfileModule { }
