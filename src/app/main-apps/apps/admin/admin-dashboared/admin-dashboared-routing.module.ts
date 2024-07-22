import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboaredComponent } from './admin-dashboared/admin-dashboared.component';

const routes: Routes = [
  {
    path:'adminDashboared-list',
    component:AdminDashboaredComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboaredRoutingModule { }
