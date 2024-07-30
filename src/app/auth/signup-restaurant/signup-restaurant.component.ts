import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-restaurant',
  templateUrl: './signup-restaurant.component.html',
  styleUrls: ['./signup-restaurant.component.scss']
})
export class SignupRestaurantComponent implements OnInit {
  signup_restaurant_form = {
    email:null,
    restaurant_name: null,
    phone:null,
    location_id:null,
    name:null,
    password:null,
    restaurant_photo:null,
    health_certificate:null,
    commercial_register:null,

  }
  constructor() { }

  ngOnInit(): void {
  }

}
