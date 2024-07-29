import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewUsersComponent } from './view-users/view-users.component';
import { ViewUsersDetailsComponent } from './view-users-details/view-users-details.component';
import { TechSupportComponent } from './tech-support/tech-support.component';

const routes: Routes = [

  {
    path:'adminViewUsers-list',
    component:ViewUsersComponent
  },

  {
    path:'adminUserDetails-list',
    component:ViewUsersDetailsComponent
  },

  {
    path:'adminTeckSupport-list',
    component:TechSupportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManageRoutingModule { }
