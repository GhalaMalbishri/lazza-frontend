import {  CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './button/button.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { InputTextComponent } from './input-text/input-text.component';
import { RestaurantCardComponent } from './restaurant-card/restaurant-card.component';
import { RouterModule } from '@angular/router';
import { CardDetailsComponent } from './card-details/card-details.component';
import { TableButtonComponent } from './table-button/table-button.component';
import { LoaderComponent } from './loader/loader.component';
import { PaginationComponent } from './pagination/pagination.component';





@NgModule({
  declarations: [

    ButtonComponent,
    ProductCardComponent,
    InputTextComponent,
    RestaurantCardComponent,
    TableButtonComponent,
    LoaderComponent,
    PaginationComponent,

  ],
  imports: [
    CommonModule,
    RouterModule // added this for ?//
  ],
  //added this:
   exports: [
    ButtonComponent,
    ProductCardComponent,
    InputTextComponent,
    RestaurantCardComponent,
    TableButtonComponent,
    LoaderComponent,
    PaginationComponent,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]




})
export class SharedComponentsModule { }
