import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdsReqRoutingModule } from './ads-req-routing.module';
import { AdsPageComponent } from './ads-page/ads-page.component';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';


@NgModule({
  declarations: [
    AdsPageComponent
  ],
  imports: [
    CommonModule,
    AdsReqRoutingModule,
    SharedComponentsModule
  ]
})
export class AdsReqModule { }
