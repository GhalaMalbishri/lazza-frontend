import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ImpApiService } from 'src/app/services/imp-api.service';
import { auth } from 'src/constent/Route';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    login_form = {
    email: null,   // key must be like postman
    password: null,
  };
  constructor(private impApiService:ImpApiService,private Route :Router) { }

ngOnInit(): void {
  let user = JSON.parse(localStorage.getItem('user')) // to get user's info
  console.log(user.user.name);

  }

login()
{
  console.log(this.login_form);
                        //    api     +     data
    this.impApiService.post(auth.login,this.login_form).subscribe(data=>{ // if you want to see data use subscribe
    localStorage.setItem('user',data.user)
    localStorage.setItem('token',data.access_token) // للترتيب
    this.Route.navigate(['apps/customer-home/Customerhome-list'])
    console.log(data);
   })

}

goToPage(){

}
}
