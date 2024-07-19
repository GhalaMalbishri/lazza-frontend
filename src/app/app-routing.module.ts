import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-apps/layout/main-layout/main-layout.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [

  {
    path:'',
    redirectTo:'./auth/login',
    pathMatch:'full'
  },

  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
//
  {
    path:'apps', component:MainLayoutComponent,
    loadChildren: () => import('./main-apps/main-apps.module').then(m => m.MainAppsModule)
  },


  // ? is it here?
  {
    path:'homePage',
    loadChildren: () => import('./home-page/home-page.component').then(m => m.HomePageComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
