import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  sidebar_menu = [
    {
    name: 'الصفحة الرئيسية',
    route:'restaurant-home/restaurant-home-list'
  },
    {
    name: 'الطلبات',
    route:'restaurant-home/orders-restaurant-list'
  },
    {
    name: 'الوجبات',
    route:''
  },
    {
    name: 'الاعلانات',
    route:''
  },
    {
    name: 'الدعم الفني',
    route:''
  },
];

  constructor() {
    // type = localStorage.getItem
    // if(type == "admin"){
    //   [{jnjkhjb}]
    // }
    // else{
    //   [kjnbhgvfc]
    // }
  }

  ngOnInit(): void {
  }

}
