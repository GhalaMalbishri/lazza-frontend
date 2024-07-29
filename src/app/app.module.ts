
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TokenInterceptorInterceptor } from './services/token-interceptor.interceptor';
import { SignupCustomerComponent } from './auth/signup-customer/signup-customer.component';
import { ErrorInterceptoService } from './services/error-intercepto.service';
import { SharedComponentsModule } from './shared-components/shared-components.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent,
    SignupCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    SharedComponentsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorInterceptor, // اي ريكويست لازم يعدي من هنا
      multi: true,
    },

    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptoService, // اي ريكويست لازم يعدي من هنا
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
