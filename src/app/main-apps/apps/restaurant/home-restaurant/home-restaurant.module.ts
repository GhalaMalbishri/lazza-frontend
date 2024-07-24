import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRestaurantRoutingModule } from './home-restaurant-routing.module';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';

@NgModule({
  declarations: [
    HomeDashboardComponent
  ],
  imports: [
    CommonModule,
    HomeRestaurantRoutingModule,
    SharedComponentsModule
  ]
})
export class HomeRestaurantModule { }
