import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './button/button.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { InputTextComponent } from './input-text/input-text.component';
import { RestaurantCardComponent } from './restaurant-card/restaurant-card.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [

    ButtonComponent,
    ProductCardComponent,
    InputTextComponent,
    RestaurantCardComponent

  ],
  imports: [
    CommonModule,
    RouterModule // added this for ?
  ],
  //added this:
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    RestaurantCardComponent
  ]


})
export class SharedComponentsModule { }
