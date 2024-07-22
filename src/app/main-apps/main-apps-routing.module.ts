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
import { ViewUsersComponent } from './apps/admin/user-manage/view-users/view-users.component';
import { ViewUsersDetailsComponent } from './apps/admin/user-manage/view-users-details/view-users-details.component';
import { CurrentOrdersComponent } from './apps/customer/orders-customer/current-orders/current-orders.component';
import { PreviouseOrdersComponent } from './apps/customer/orders-customer/previouse-orders/previouse-orders.component';
import { CustomerWalletComponent } from './apps/customer/profile-customer/customer-wallet/customer-wallet.component';
import { ProfileComponent } from './apps/customer/profile-customer/profile/profile.component';
import { CartComponent } from './apps/customer/restuarant-customer/restaurant/cart/cart.component';
import { PaymentComponent } from './apps/customer/restuarant-customer/restaurant/payment/payment.component';
import { ProductsComponent } from './apps/customer/restuarant-customer/restaurant/products/products.component';
import { ViewRestaurantComponent } from './apps/customer/restuarant-customer/view-restaurant/view-restaurant.component';
import { RequestAdComponent } from './apps/restaurant/ads-restaurant/request-ad/request-ad.component';
import { HomeDashboardComponent } from './apps/restaurant/home-restaurant/home-dashboard/home-dashboard.component';
import { AddProductComponent } from './apps/restaurant/meals-restaurant/add-product/add-product.component';
import { ViewApdateProductComponent } from './apps/restaurant/meals-restaurant/view-apdate-product/view-apdate-product.component';
import { UserOrderComponent } from './apps/restaurant/orders-restaurant/user-order/user-order.component';
import { CustToRestaurantComponent } from './apps/restaurant/tech-support-restaurant/cust-to-restaurant/cust-to-restaurant.component';
import { RestaurantToAdminComponent } from './apps/restaurant/tech-support-restaurant/restaurant-to-admin/restaurant-to-admin.component';
import { SideBarComponent } from './layout/side-bar/side-bar.component';

const routes: Routes = [
   //Admin
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

  {
    path:'adminHome',
    component:MainPageComponent
  },

  {
    path:'adminViewRest',
    component:AdminRestViewComponent
  },

{
  path:'adminWallet',
  component:AdminWalletComponent
},

{
  path:'adminTerms',
  component:TermsConditionComponent
},
{
  path:'admin-view-users',
  component:ViewUsersComponent
},
{
  path:'admin-user-details',
  component:ViewUsersDetailsComponent
},


// customer
{
  path:'Customerhome',
  component:CustMainPageComponent
},

{
  path:'current-orders',
  component:CurrentOrdersComponent
},

{
  path:'previous-orders',
  component:PreviouseOrdersComponent
},

{
  path:'customer-wallet',
  component:CustomerWalletComponent
},

{
  path:'customer-profile',
  component:ProfileComponent
},

{
  path:'customer-cart',
  component:CartComponent
},

// just for now , take all updates from ghala
// {
//   path:'restuarant-customer',
//   loadChildren: () => import('./apps/customer/restuarant-customer/restuarant-customer.module').then(m => m.RestuarantCustomerModule)
// },

{
  path:'customer-payment',
  component:PaymentComponent
},

{
  path:'customer-restaurant-products',
  component:ProductsComponent
},

{
  path:'customer-view-restaurant',
  component:ViewRestaurantComponent
},

//restaurant
{
  path:'restaurant-ads',
  loadChildren: () => import('./apps/restaurant/ads-restaurant/ads-restaurant.module').then(m => m.AdsRestaurantModule)
},

{
  path:'restaurant-home',
  loadChildren: () => import('./apps/restaurant/home-restaurant/home-restaurant.module').then(m => m.HomeRestaurantModule)
},
{
  path:'meals-restaurant',
  loadChildren: () => import('./apps/restaurant/meals-restaurant/meals-restaurant.module').then(m => m.MealsRestaurantModule)
},

{
  path:'restaurant-user-order',
  loadChildren: () => import('./apps/restaurant/orders-restaurant/orders-restaurant.module').then(m => m.OrdersRestaurantModule)
},


{
  path:'tech-support-restaurant',
  loadChildren: () => import('./apps/restaurant/tech-support-restaurant/tech-support-restaurant.module').then(m => m.TechSupportRestaurantModule)
},



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainAppsRoutingModule { }
