import { log } from 'console';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ImpApiService } from 'src/app/services/imp-api.service';
import { auth } from 'src/constent/Route';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submited = false

  loginForm = null
  constructor(private impApiService: ImpApiService, private Route: Router, private fb: FormBuilder, private toastr: ToastrService, private modalService: NgbModal) { }

  ngOnInit(): void {
      this.loginForm = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required]
    })
  }

  login() {

    this.submited = true
    if (this.loginForm.invalid) {
      return this.toastr.error("خطا", "البيانات المدخلة غير صحيحة");
    }

      this.impApiService.post(auth.login, this.loginForm.value).subscribe(data => {
      localStorage.setItem('user_type', data.data.user_type_id) // here i saved user_type in localStorage
      localStorage.setItem('token', data.access_token) //  here i saved user_type in localStorage

      if (data.data.user_type_id == 2) {
        this.Route.navigate(['/apps/restaurant-home/restaurantHome-list'])
      }
      if (data.data.user_type_id == 1) {
        this.Route.navigate(['/apps/admin-home-main/adminHomeMain-list'])
      }
      if (data.data.user_type_id == 3) {
        this.Route.navigate(['/apps/customer-home/Customerhome-list'])
      }

    })
  }
  openModal(modal) {
    this.modalService.open(modal, { centered: true })
  }

}

// export class LoginComponent implements OnInit {
//   loading = false
//   submited = false

//   loginForm = this.fb.group({
//     email:['' , Validators.email] ,
//     password:['',[Validators.required]]
//   })
//   constructor(private impApiService: ImpApiService, private Route: Router , private fb : FormBuilder) { }

//   ngOnInit(): void {
//     let user = JSON.parse(localStorage.getItem('user')) // to get user's info
//     console.log(user);
//   }

//   login() {
//     this.loading = true
//     this.submited = true
//                            //    api     +     data
//       this.impApiService.post(auth.login, this.loginForm).subscribe(data => { // if you want to see data use subscribe
//       localStorage.setItem('user_type', data.data.user_type_id) // here i saved user_type in localStorage
//       localStorage.setItem('token', data.access_token) //  here i saved user_type in localStorage



//       if (data.data.user_type_id == 2) {
//         this.Route.navigate(['/apps/restaurant-home/restaurantHome-list'])
//       }
//       if (data.data.user_type_id == 1) {
//         this.Route.navigate(['/apps/admin-home-main/adminHomeMain-list'])
//       }
//       if (data.data.user_type_id == 3) {
//         this.Route.navigate(['/apps/customer-home/Customerhome-list'])
//       }

//       // this.Route.navigate(['apps/customer-home/Customerhome-list'])
//       // console.log(data);
//       this.loading = false
//     } , err =>{
//       this.loading = false
//     })

//   }
//
