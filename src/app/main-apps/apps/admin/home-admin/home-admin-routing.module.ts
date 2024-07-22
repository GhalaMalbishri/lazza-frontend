import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { AdminRestViewComponent } from './admin-rest-view/admin-rest-view.component';

const routes: Routes = [

  {
    path:'adminHomeMain-list',
    component:MainPageComponent
  },


  {
    path:'adminHomeViewRest-list',
    component:AdminRestViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeAdminRoutingModule { }
