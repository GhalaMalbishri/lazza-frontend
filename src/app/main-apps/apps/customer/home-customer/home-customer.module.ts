import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeCustomerRoutingModule } from './home-customer-routing.module';
import { CustMainPageComponent } from './cust-main-page/cust-main-page.component';
import { SharedComponentsModule } from '../../../../shared-components/shared-components.module';


@NgModule({
  declarations: [
    CustMainPageComponent
  ],
  imports: [
    CommonModule,
    HomeCustomerRoutingModule,
    SharedComponentsModule
  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class HomeCustomerModule { }
