import { log } from 'console';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ImpApiService } from 'src/app/services/imp-api.service';
import { auth } from 'src/constent/Route';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submited = false

  loginForm = null
  constructor(private impApiService: ImpApiService, private Route: Router, private fb: FormBuilder, private toastr: ToastrService, private modalService: NgbModal , private spinner : NgxSpinnerService) { }

  ngOnInit(): void {

      this.loginForm = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required]
    })

  }

  login() {


    if (this.loginForm.invalid) {
      return this.toastr.error("خطا", "البيانات المدخلة غير صحيحة");
    }
      this.spinner.show();
      this.impApiService.post(auth.login, this.loginForm.value).subscribe(data => {

      console.log(data);

      localStorage.setItem('user_type', data.data.user_type) // here i saved user_type in localStorage
      localStorage.setItem('token', data.access_token) //  here i saved user_type in localStorage
      localStorage.setItem('user', JSON.stringify(data.data))

      if (data.data.user_type == 2) {
        this.Route.navigate(['/apps/restaurant-home/restaurantHome-list'])
      }
      if (data.data.user_type == 1) {
        this.Route.navigate(['/apps/admin-home-main/adminHomeMain-list'])
      }
      if (data.data.user_type == 3) {
        this.Route.navigate(['/apps/customer-home/Customerhome-list'])
      }
      this.spinner.hide();
    })
  }

  openModal(modal) {
    this.modalService.open(modal, { centered: true })
  }

}
