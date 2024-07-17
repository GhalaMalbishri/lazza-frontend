import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManageRoutingModule } from './user-manage-routing.module';
import { ViewUsersComponent } from './view-users/view-users.component';
import { ViewUsersDetailsComponent } from './view-users-details/view-users-details.component';


@NgModule({
  declarations: [
    ViewUsersComponent,
    ViewUsersDetailsComponent
  ],
  imports: [
    CommonModule,
    UserManageRoutingModule
  ]
})
export class UserManageModule { }
