import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeCustomerRoutingModule } from './home-customer-routing.module';
import { CustMainPageComponent } from './cust-main-page/cust-main-page.component';


@NgModule({
  declarations: [
    CustMainPageComponent
  ],
  imports: [
    CommonModule,
    HomeCustomerRoutingModule
  ]
})
export class HomeCustomerModule { }
