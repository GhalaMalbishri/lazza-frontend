import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { AdminWalletComponent } from './admin-wallet/admin-wallet.component';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';


@NgModule({
  declarations: [
    AdminWalletComponent
  ],
  imports: [
    CommonModule,
    SettingRoutingModule,
    SharedComponentsModule
  ]
})
export class SettingModule { }
