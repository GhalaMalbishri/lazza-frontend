import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignupCustomerComponent } from './signup-customer/signup-customer.component';
import { SignupRestaurantComponent } from './signup-restaurant/signup-restaurant.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { WriteOtpComponent } from './write-otp/write-otp.component';
import { UserTypeComponent } from './user-type/user-type.component';

const routes: Routes = [
  {
    path:'log-in', // تضيف القارد في المكان الي تبيه يسوي تشيك
    component:LoginComponent
  },
  {
    path:'log-out',
    component:LogoutComponent
  },
  {
    path:'not-found',
    component:NotFoundComponent
  },

  {
    path:'signup-customer',
   component:SignupCustomerComponent
  },

  {
    path:'signup-Rest',
   component:SignupRestaurantComponent
  },


  {
    path:'reset-password',
   component:ResetpasswordComponent
  },

  {
    path:'write-otp',
   component:WriteOtpComponent
  },
  {
    path:'user-type',
    component:UserTypeComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
