import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ImpApiService } from 'src/app/services/imp-api.service';
import { auth } from 'src/constent/Route';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup-customer',
  templateUrl: './signup-customer.component.html',
  styleUrls: ['./signup-customer.component.scss']
})
export class SignupCustomerComponent implements OnInit {
  // signUp_Customer_form = {
  //   name: null,
  //   email: null,   // key must be like postman
  //   phone: null,
  //   national_id: null,
  //   password: null,
  // };
  signup_form = null;
  constructor(private impApiService:ImpApiService,private Route :Router,private fb: FormBuilder,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.signup_form = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required],
      name: ['', Validators.required],
      National_id: ['', Validators.required],
      phone_number: ['', Validators.required],
    })
  }

  signUp()
{


  if (this.signup_form.invalid) {
    return this.toastr.error("خطا", "البيانات المدخلة غير صحيحة");
  }else{
    this.toastr.success("تم التسجيل بنجاح");
    //    api     +     data                                           // if you want to see data use subscribe
    this.impApiService.post(auth.register_customer,this.signup_form).subscribe(data=>{
    localStorage.setItem('user',data.data.user)
    localStorage.setItem('token',data.data.access_token) // للترتيب
    this.Route.navigate(['apps/customer-home/Customerhome-list'])
    console.log(data);
   })
  }
}

}
