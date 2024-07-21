import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRestaurantRoutingModule } from './home-restaurant-routing.module';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';

@NgModule({
  declarations: [
    HomeDashboardComponent
  ],
  imports: [
    CommonModule,
    HomeRestaurantRoutingModule,
  ]
})
export class HomeRestaurantModule { }
