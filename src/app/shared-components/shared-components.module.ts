import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { InputTextComponent } from './input-text/input-text.component';
import { RestaurantCardComponent } from './restaurant-card/restaurant-card.component';



@NgModule({
  declarations: [
    ButtonComponent,
    ProductCardComponent,
    InputTextComponent,
    RestaurantCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedComponentsModule { }
