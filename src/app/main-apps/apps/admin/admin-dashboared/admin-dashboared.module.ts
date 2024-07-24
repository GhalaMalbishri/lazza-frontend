import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboaredRoutingModule } from './admin-dashboared-routing.module';
import { AdminDashboaredComponent } from './admin-dashboared/admin-dashboared.component';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';


@NgModule({
  declarations: [
    AdminDashboaredComponent
  ],
  imports: [
    CommonModule,
    AdminDashboaredRoutingModule,
    SharedComponentsModule
  ]
})
export class AdminDashboaredModule { }
