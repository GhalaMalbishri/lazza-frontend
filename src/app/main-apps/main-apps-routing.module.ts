import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component';
import { ActivatePageComponent } from './apps/admin/activate-req/activate-page/activate-page.component';
import { AdminDashboaredComponent } from './apps/admin/admin-dashboared/admin-dashboared/admin-dashboared.component';
import { AdsPageComponent } from './apps/admin/ads-req/ads-page/ads-page.component';
import { MainPageComponent } from './apps/admin/home-admin/main-page/main-page.component';
import { AdminRestViewComponent } from './apps/admin/home-admin/admin-rest-view/admin-rest-view.component';
import { AdminWalletComponent } from './apps/admin/setting/admin-wallet/admin-wallet.component';
import { TermsConditionComponent } from './apps/admin/setting/terms-condition/terms-condition.component';
import { HomeCustomerRoutingModule } from './apps/customer/home-customer/home-customer-routing.module';
import { CustMainPageComponent } from './apps/customer/home-customer/cust-main-page/cust-main-page.component';
import { TechSupportRestaurantRoutingModule } from './apps/restaurant/tech-support-restaurant/tech-support-restaurant-routing.module';
import { CustToRestaurantComponent } from './apps/restaurant/tech-support-restaurant/cust-to-restaurant/cust-to-restaurant.component';

const routes: Routes = [

  {
    path:'adminActivate',
    component:ActivatePageComponent
  },
  //     loadChildren: () => import('.apps/admin/activate-req/activate-req.module').then(m => m.)


  {
    path:'adminDashboared',
    component:AdminDashboaredComponent
  },

  {
    path:'adminAds',
    component:AdsPageComponent
  },
//`
  {
    path:'adminHome',
    component:MainPageComponent
  },

  {
    path:'adminViewRest',
    component:AdminRestViewComponent
  },
//

{
  path:'adminWallet',
  component:AdminWalletComponent
},

{
  path:'adminTerms',
  component:TermsConditionComponent
},

// new
{
  path:'Customerhome',
  component:CustMainPageComponent
},

{
  path:'tech--support',
  component:CustToRestaurantComponent
},



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainAppsRoutingModule { }
