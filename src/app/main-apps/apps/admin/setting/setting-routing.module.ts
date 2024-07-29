import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminWalletComponent } from './admin-wallet/admin-wallet.component';

const routes: Routes = [
  {
    path:'adminWallet-list',
    component:AdminWalletComponent
  },

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
