import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { UserTypeComponent } from './user-type/user-type.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';


@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent,
    NotFoundComponent,
    // SignUpComponent,
    SignupRestaurantComponent,
    SignupUserTypeComponent,
    ResetpasswordComponent,
    WriteOtpComponent,
    UserTypeComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedComponentsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
