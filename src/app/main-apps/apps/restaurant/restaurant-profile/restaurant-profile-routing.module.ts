import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestProfileListComponent } from './rest-profile-list/rest-profile-list.component';

const routes: Routes = [
  {
    path: 'rest-profile-list',
    component:RestProfileListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantProfileRoutingModule { }
