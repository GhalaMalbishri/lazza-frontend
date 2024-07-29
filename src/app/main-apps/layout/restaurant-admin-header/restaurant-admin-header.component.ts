import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-restaurant-admin-header',
  templateUrl: './restaurant-admin-header.component.html',
  styleUrls: ['./restaurant-admin-header.component.scss']
})
export class RestaurantAdminHeaderComponent implements OnInit
 {

  constructor(private Router:Router) { }

  ngOnInit(): void {
  }
  signout(){
    localStorage.clear();
    this.Router.navigate(['/auth/login']);
  }
}
