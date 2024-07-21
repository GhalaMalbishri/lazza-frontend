import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignupCustomerComponent } from './signup-customer/signup-customer.component';
import { SignupRestaurantComponent } from './signup-restaurant/signup-restaurant.component';
import { SignupUserTypeComponent } from './signup-user-type/signup-user-type.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'logout',
    component:LogoutComponent
  },
  {
    path:'notfound',
    component:NotFoundComponent
  },

  {
    path:'signupCustomer',
   component:SignupCustomerComponent
  },

  {
    path:'signupRest',
   component:SignupRestaurantComponent
  },

  {
    path:'signupType',
   component:SignupUserTypeComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
