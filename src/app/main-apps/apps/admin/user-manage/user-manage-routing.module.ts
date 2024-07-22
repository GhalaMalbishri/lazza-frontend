import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewUsersComponent } from './view-users/view-users.component';
import { ViewUsersDetailsComponent } from './view-users-details/view-users-details.component';

const routes: Routes = [

  {
    path:'adminViewUsers-list',
    component:ViewUsersComponent
  },

  {
    path:'adminUserDetails-list',
    component:ViewUsersDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManageRoutingModule { }
