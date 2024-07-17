import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WalletRestaurantRoutingModule } from './wallet-restaurant-routing.module';
import { WalletComponent } from './wallet/wallet.component';


@NgModule({
  declarations: [
    WalletComponent
  ],
  imports: [
    CommonModule,
    WalletRestaurantRoutingModule
  ]
})
export class WalletRestaurantModule { }
