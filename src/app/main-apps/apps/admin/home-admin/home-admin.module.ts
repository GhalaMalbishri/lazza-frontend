import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeAdminRoutingModule } from './home-admin-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { AdminRestViewComponent } from './admin-rest-view/admin-rest-view.component';


@NgModule({
  declarations: [
    MainPageComponent,
    AdminRestViewComponent
  ],
  imports: [
    CommonModule,
    HomeAdminRoutingModule
  ]
})
export class HomeAdminModule { }
