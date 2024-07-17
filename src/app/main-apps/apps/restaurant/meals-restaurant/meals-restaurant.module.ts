import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MealsRestaurantRoutingModule } from './meals-restaurant-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewApdateProductComponent } from './view-apdate-product/view-apdate-product.component';


@NgModule({
  declarations: [
    AddProductComponent,
    ViewApdateProductComponent
  ],
  imports: [
    CommonModule,
    MealsRestaurantRoutingModule
  ]
})
export class MealsRestaurantModule { }
