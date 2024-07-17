import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';
import { AdminWalletComponent } from './admin-wallet/admin-wallet.component';


@NgModule({
  declarations: [
    TermsConditionComponent,
    AdminWalletComponent
  ],
  imports: [
    CommonModule,
    SettingRoutingModule
  ]
})
export class SettingModule { }
