import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MENU } from '../menu';


@Component({
  selector: 'app-restaurant-admin-header',
  templateUrl: './restaurant-admin-header.component.html',
  styleUrls: ['./restaurant-admin-header.component.scss']
})
export class RestaurantAdminHeaderComponent implements OnInit {
  menu = null

  constructor(private Router: Router) { }
  ngOnInit(): void {
    let user_type = JSON.parse(localStorage.getItem('user_type'))

    let arrayList = []
    for (let value of MENU) {
      if (value.user_type.includes(user_type)) {
        arrayList.push(value)
      }
    }
    this.menu = arrayList
  }
  
  signout() {
    localStorage.clear();
    this.Router.navigate(['/auth/login']);
  }
}
