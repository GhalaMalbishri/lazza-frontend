import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManageRoutingModule } from './user-manage-routing.module';
import { ViewUsersComponent } from './view-users/view-users.component';
import { ViewUsersDetailsComponent } from './view-users-details/view-users-details.component';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';
import { TechSupportComponent } from './tech-support/tech-support.component';


@NgModule({
  declarations: [
    ViewUsersComponent,
    ViewUsersDetailsComponent,
    TechSupportComponent
  ],
  imports: [
    CommonModule,
    UserManageRoutingModule,
    SharedComponentsModule
  ]
})
export class UserManageModule { }
