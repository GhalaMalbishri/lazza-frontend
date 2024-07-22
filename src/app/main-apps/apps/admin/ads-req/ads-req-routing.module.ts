import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdsPageComponent } from './ads-page/ads-page.component';

const routes: Routes = [
  {
    path:'adminAds-list',
    component:AdsPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdsReqRoutingModule { }
