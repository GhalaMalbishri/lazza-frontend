import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustMainPageComponent } from './cust-main-page/cust-main-page.component';

const routes: Routes = [
  {
    path:'Customerhome-list',
    component:CustMainPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeCustomerRoutingModule {}
