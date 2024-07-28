import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImpApiService } from 'src/app/services/imp-api.service';
import { auth } from 'src/constent/Route';


@Component({
  selector: 'app-signup-customer',
  templateUrl: './signup-customer.component.html',
  styleUrls: ['./signup-customer.component.scss']
})
export class SignupCustomerComponent implements OnInit {
  signUp_Customer_form = {
    name: null,
    email: null,   // key must be like postman
    phone: null,
    national_id: null,
    password: null,
  };
  constructor(private impApiService:ImpApiService,private Route :Router) { }

  ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem('user')) // to get user's info
    console.log(user.user);

  }

  signUp()
{
  console.log(this.signUp_Customer_form);
                        //    api     +     data
    this.impApiService.post(auth.register_customer,this.signUp_Customer_form).subscribe(data=>{ // if you want to see data use subscribe
    localStorage.setItem('user',data.user)
    localStorage.setItem('token',data.access_token) // للترتيب
    this.Route.navigate(['apps/customer-home/Customerhome-list'])
    console.log(data);
   })

}

}
