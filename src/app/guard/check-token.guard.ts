import { log } from 'console';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckTokenGuard implements CanActivate {

constructor(private router: Router){

}

  canActivate(
    route: ActivatedRouteSnapshot,                                                  //يبغا مني بولين يعدي او لا
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const token = localStorage.getItem("token"); // call token here
      // const user = JSON.parse(localStorage.getItem("user"))
      if (token) {
        const user = JSON.parse(localStorage.getItem("user_type")) // here i told him in localStorage i saved user_type , get it for me
        if (user == 2) {   // rest
          this.router.navigate(["/apps/restaurant-home/restaurantHome-list"]);
        }
        if (user == 1) {  /// admin
          this.router.navigate(["/apps/admin-home-main/adminHomeMain-list"]);
        }
        if (user == 3) {  /// customer
          this.router.navigate(["/apps/customer-home/Customerhome-list"]);
        }

           // here if you already login go to this page
      }
      return true
    }

  }

