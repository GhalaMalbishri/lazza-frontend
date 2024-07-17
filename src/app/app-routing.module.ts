import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-apps/layout/main-layout/main-layout.component';

const routes: Routes = [

  {
    path:'',
    redirectTo:'./auth/login',
    pathMatch:'full'
  },
  {
path:'rc',
loadChildren: () => import('./main-apps/apps/customer/restuarant-customer/restuarant-customer.module').then(m => m.RestuarantCustomerModule)
},

  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },

  {
    path:'apps', component:MainLayoutComponent,
    loadChildren: () => import('./main-apps/main-apps.module').then(m => m.MainAppsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
