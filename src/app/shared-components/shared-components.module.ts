import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { MapsComponent } from './maps/maps.component';



@NgModule({
  declarations: [
    ButtonsComponent,
    CardsComponent,
    MapsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedComponentsModule { }
