import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NotFoundComponent } from './not-found/not-found.component';
// import { SignUpComponent } from './sign-up/sign-up.component';
import { SignupCustomerComponent } from './signup-customer/signup-customer.component';
import { SignupRestaurantComponent } from './signup-restaurant/signup-restaurant.component';
import { SignupUserTypeComponent } from './signup-user-type/signup-user-type.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { WriteOtpComponent } from './write-otp/write-otp.component';


@NgModule({
  declarations: [
    //LoginComponent,
    LogoutComponent,
    NotFoundComponent,
    // SignUpComponent,
    SignupCustomerComponent,
    SignupRestaurantComponent,
    SignupUserTypeComponent,
    ResetpasswordComponent,
    WriteOtpComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
