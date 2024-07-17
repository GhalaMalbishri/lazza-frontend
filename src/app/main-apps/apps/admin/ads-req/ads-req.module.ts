import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdsReqRoutingModule } from './ads-req-routing.module';
import { AdsPageComponent } from './ads-page/ads-page.component';


@NgModule({
  declarations: [
    AdsPageComponent
  ],
  imports: [
    CommonModule,
    AdsReqRoutingModule
  ]
})
export class AdsReqModule { }
