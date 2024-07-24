import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WalletRestaurantRoutingModule } from './wallet-restaurant-routing.module';
import { WalletComponent } from './wallet/wallet.component';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';


@NgModule({
  declarations: [
    WalletComponent
  ],
  imports: [
    CommonModule,
    WalletRestaurantRoutingModule,
    SharedComponentsModule
  ]
})
export class WalletRestaurantModule { }
