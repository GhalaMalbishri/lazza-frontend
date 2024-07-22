import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerWalletComponent } from './customer-wallet/customer-wallet.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path:'customerWallet-list',
    component:CustomerWalletComponent
  },
  {
    path:'CustomerProfile-list',
    component:ProfileComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileCustomerRoutingModule { }
