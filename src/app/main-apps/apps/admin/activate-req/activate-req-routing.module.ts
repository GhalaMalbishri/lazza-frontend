import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivatePageComponent } from './activate-page/activate-page.component';

const routes: Routes = [

  {
    path:'adminActivate-list',
    component:ActivatePageComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivateReqRoutingModule { }
