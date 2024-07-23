import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileCustomerRoutingModule } from './profile-customer-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { CustomerWalletComponent } from './customer-wallet/customer-wallet.component';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';


@NgModule({
  declarations: [
    ProfileComponent,
    CustomerWalletComponent
  ],
  imports: [
    CommonModule,
    ProfileCustomerRoutingModule,
    SharedComponentsModule
  ]
})
export class ProfileCustomerModule { }
