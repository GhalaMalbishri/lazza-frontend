import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainAppsRoutingModule } from './main-apps-routing.module';
import { FooterComponent } from './layout/footer/footer.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { SideBarComponent } from './layout/side-bar/side-bar.component';
import { RestaurantAdminHeaderComponent } from './layout/restaurant-admin-header/restaurant-admin-header.component';



@NgModule({
  declarations: [
    FooterComponent,
    MainLayoutComponent,
    HeaderComponent,
    SideBarComponent,
    RestaurantAdminHeaderComponent,

  ],
  imports: [
    CommonModule,
    MainAppsRoutingModule
  ]
})
export class MainAppsModule {

}
