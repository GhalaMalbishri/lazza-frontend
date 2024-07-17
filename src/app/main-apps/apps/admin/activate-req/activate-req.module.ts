import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivateReqRoutingModule } from './activate-req-routing.module';
import { ActivatePageComponent } from './activate-page/activate-page.component';


@NgModule({
  declarations: [
    ActivatePageComponent
  ],
  imports: [
    CommonModule,
    ActivateReqRoutingModule
  ]
})
export class ActivateReqModule { }
