import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component';
import { ActivatePageComponent } from './apps/admin/activate-req/activate-page/activate-page.component';
import { AdminDashboaredComponent } from './apps/admin/admin-dashboared/admin-dashboared/admin-dashboared.component';
import { AdsPageComponent } from './apps/admin/ads-req/ads-page/ads-page.component';
import { MainPageComponent } from './apps/admin/home-admin/main-page/main-page.component';
import { AdminRestViewComponent } from './apps/admin/home-admin/admin-rest-view/admin-rest-view.component';
import { AdminWalletComponent } from './apps/admin/setting/admin-wallet/admin-wallet.component';
import { HomeCustomerRoutingModule } from './apps/customer/home-customer/home-customer-routing.module';
import { CustMainPageComponent } from './apps/customer/home-customer/cust-main-page/cust-main-page.component';
import { ViewUsersComponent } from './apps/admin/user-manage/view-users/view-users.component';
import { ViewUsersDetailsComponent } from './apps/admin/user-manage/view-users-details/view-users-details.component';
import { ProfileComponent } from './apps/customer/profile-customer/profile/profile.component';
import { RequestAdComponent } from './apps/restaurant/ads-restaurant/request-ad/request-ad.component';
import { HomeDashboardComponent } from './apps/restaurant/home-restaurant/home-dashboard/home-dashboard.component';
import { AddProductComponent } from './apps/restaurant/meals-restaurant/add-product/add-product.component';
import { ViewApdateProductComponent } from './apps/restaurant/meals-restaurant/view-apdate-product/view-apdate-product.component';
import { UserOrderComponent } from './apps/restaurant/orders-restaurant/user-order/user-order.component';
import { CustToRestaurantComponent } from './apps/restaurant/tech-support-restaurant/cust-to-restaurant/cust-to-restaurant.component';
import { RestaurantToAdminComponent } from './apps/restaurant/tech-support-restaurant/restaurant-to-admin/restaurant-to-admin.component';
import { AdminGuard } from '../guard/admin.guard';
import { RestaurantGuard } from '../guard/restaurant.guard';
import { CustomerGuard } from '../guard/customer.guard';

const routes: Routes = [

  //---------------- Admin ----------------------

//correct, path: apps/admin-activate/adminActivate-list
  {
    path:'admin-activate',
    canActivate:[AdminGuard],
    loadChildren: () => import('./apps/admin/activate-req/activate-req.module').then(m => m.ActivateReqModule)
  },


  //correct, path: apps/admin-dashboared/adminDashboared-list
  {
    path:'admin-dashboared',
    canActivate:[AdminGuard],
    loadChildren: () => import('./apps/admin/admin-dashboared/admin-dashboared.module').then(m => m.AdminDashboaredModule)
  },



  //correct, path: apps/admin-ads/adminAds-list
  {
    path:'admin-ads',
    canActivate:[AdminGuard],
    loadChildren: () => import('./apps/admin/ads-req/ads-req.module').then(m => m.AdsReqModule)
  },


//correct, path: apps/admin-home-main/adminHomeMain-list
{
  path:'admin-home-main',
  canActivate:[AdminGuard],
  loadChildren: () => import('./apps/admin/home-admin/home-admin.module').then(m => m.HomeAdminModule)
},

  //correct, path: apps/admin-home-ViewRest/adminHomeViewRest-list
{
  path:'admin-home-ViewRest',
  canActivate:[AdminGuard],
  loadChildren: () => import('./apps/admin/home-admin/home-admin.module').then(m => m.HomeAdminModule)
},


//correct, path: apps/admin-wallet/adminWallet-list
{
  path:'admin-wallet',
  canActivate:[AdminGuard],
  loadChildren: () => import('./apps/admin/setting/setting.module').then(m => m.SettingModule)
},


//correct, path: apps/admin-view-users/adminViewUsers-list
{
  path:'admin-view-users',
  canActivate:[AdminGuard],
  loadChildren: () => import('./apps/admin/user-manage/user-manage.module').then(m => m.UserManageModule)
},


//correct, path: apps/admin-user-details/adminUserDetails-list
{
  path:'admin-user-details',
  canActivate:[AdminGuard],
  loadChildren: () => import('./apps/admin/user-manage/user-manage.module').then(m => m.UserManageModule)
},

//correct, path: apps/admin-user-details/adminTeckSupport-list
{
  path:'admin-user-details',
  loadChildren: () => import('./apps/admin/user-manage/user-manage.module').then(m => m.UserManageModule)
},



//---------------- customer ----------------------

//correct, path: /apps/customer-home/Customerhome-list
{
  path:'customer-home',
  canActivate:[CustomerGuard],
  loadChildren: () => import('./apps/customer/home-customer/home-customer.module').then(m => m.HomeCustomerModule)
},

//correct, path: apps/current-orders/currentOrder-list
{
  path:'current-orders',
  canActivate:[CustomerGuard],
  loadChildren: () => import('./apps/customer/orders-customer/orders-customer.module').then(m => m.OrdersCustomerModule)
},

//correct, path: apps/previous-orders/previousOrder-list
{
  path:'previous-orders',
  canActivate:[CustomerGuard],
  loadChildren: () => import('./apps/customer/orders-customer/orders-customer.module').then(m => m.OrdersCustomerModule)
},

//correct, path: apps/customer-wallet/customerWallet-list
{
  path:'customer-wallet',
  canActivate:[CustomerGuard],
  loadChildren: () => import('./apps/customer/profile-customer/profile-customer.module').then(m => m.ProfileCustomerModule)
},

//correct, path: apps/customer-profile/CustomerProfile-list
{
  path:'customer-profile',
  canActivate:[CustomerGuard],
  loadChildren: () => import('./apps/customer/profile-customer/profile-customer.module').then(m => m.ProfileCustomerModule)
},

//correct, path: apps/customer-cart/customerCart-list
{
  path:'customer-cart',
  canActivate:[CustomerGuard],
  loadChildren: () => import('./apps/customer/restuarant-customer/restuarant-customer.module').then(m => m.RestuarantCustomerModule)
},

//correct, path: apps/customer-payment/customerPayment-list
{
  path:'customer-payment',
  canActivate:[CustomerGuard],
  loadChildren: () => import('./apps/customer/restuarant-customer/restuarant-customer.module').then(m => m.RestuarantCustomerModule)
},

//correct, path: apps/customer-products/customerProducts-list
{
  path:'customer-products',
  canActivate:[CustomerGuard],
  loadChildren: () => import('./apps/customer/restuarant-customer/restuarant-customer.module').then(m => m.RestuarantCustomerModule)
},

//correct, path: apps/customer-view-rest/customerViewRest-list
{
  path:'customer-view-rest',
  canActivate:[CustomerGuard],
  loadChildren: () => import('./apps/customer/restuarant-customer/restuarant-customer.module').then(m => m.RestuarantCustomerModule)
},


//-------------- restaurant -----------------

//correct, path: apps/restaurant-ads/restaurantAds-list
{
  path:'restaurant-ads',
  canActivate:[RestaurantGuard],
  loadChildren: () => import('./apps/restaurant/ads-restaurant/ads-restaurant.module').then(m => m.AdsRestaurantModule)
},

{
  path:'restaurant-home',
  canActivate:[RestaurantGuard],
  loadChildren: () => import('./apps/restaurant/home-restaurant/home-restaurant.module').then(m => m.HomeRestaurantModule)
},


//correct, path: apps/restaurant-home/restaurantHome-list
{
  path:'restaurant-home',
  canActivate:[RestaurantGuard],
  loadChildren: () => import('./apps/restaurant/ads-restaurant/ads-restaurant.module').then(m => m.AdsRestaurantModule)
},

{
  path:'meals-restaurant',
  canActivate:[RestaurantGuard],
  loadChildren: () => import('./apps/restaurant/meals-restaurant/meals-restaurant.module').then(m => m.MealsRestaurantModule)
},

{
  path:'restaurant-user-order',
  canActivate:[RestaurantGuard],
  loadChildren: () => import('./apps/restaurant/orders-restaurant/orders-restaurant.module').then(m => m.OrdersRestaurantModule)
},


{
  path:'tech-support-restaurant',
  canActivate:[RestaurantGuard],
  loadChildren: () => import('./apps/restaurant/tech-support-restaurant/tech-support-restaurant.module').then(m => m.TechSupportRestaurantModule)
},
{
  path:'restaurant-profile',
  canActivate:[RestaurantGuard],
  loadChildren: () => import('./apps/restaurant/restaurant-profile/restaurant-profile.module').then(m => m.RestaurantProfileModule)
},





];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainAppsRoutingModule { }
