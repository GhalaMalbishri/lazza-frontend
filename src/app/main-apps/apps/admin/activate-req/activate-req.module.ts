import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivateReqRoutingModule } from './activate-req-routing.module';
import { ActivatePageComponent } from './activate-page/activate-page.component';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';


@NgModule({
  declarations: [
    ActivatePageComponent
  ],
  imports: [
    CommonModule,
    ActivateReqRoutingModule,
    SharedComponentsModule
  ]
})
export class ActivateReqModule { }
