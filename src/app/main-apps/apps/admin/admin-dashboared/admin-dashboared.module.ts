import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboaredRoutingModule } from './admin-dashboared-routing.module';
import { AdminDashboaredComponent } from './admin-dashboared/admin-dashboared.component';


@NgModule({
  declarations: [
    AdminDashboaredComponent
  ],
  imports: [
    CommonModule,
    AdminDashboaredRoutingModule
  ]
})
export class AdminDashboaredModule { }
