import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminWalletComponent } from './admin-wallet/admin-wallet.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';

const routes: Routes = [
  {
    path:'adminWallet-list',
    component:AdminWalletComponent
  },

  {
    path:'adminTerms-list',
    component:TermsConditionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
