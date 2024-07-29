import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-apps/layout/main-layout/main-layout.component';
import { CheckTokenGuard } from './guard/check-token.guard';
// import { AuthCheckGuard } from './guard/auth-check.guard';

const routes: Routes = [

  {
    path:'',
    redirectTo:'/auth/log-in',
    pathMatch:'full'
  },

  {
    path:'auth', canActivate:[CheckTokenGuard], // تحط القارد في المكان الي تبيه
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
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
