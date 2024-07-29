import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

user_type = localStorage.getItem("user_type");

  // if(this.userType == 'admin'){
    //   this.sidebarArr = [{

    //   }]
    // }
    // else {
    //   this.sidebarArr = [{}]
    // }
    //  type = localStorage.getItem
    // if(type == "admin"){
    //   [{jnjkhjb}]
    // }
    // else{
    //   [kjnbhgvfc]
    // }
  // isLogin = localStorage.getItem('token')

  constructor(private Router:Router) {
    if (2 == 2) {

    }
   }

  ngOnInit(): void {
  }
  signout(){
    localStorage.clear();
    this.Router.navigate(['/auth/login']);
  }
}
