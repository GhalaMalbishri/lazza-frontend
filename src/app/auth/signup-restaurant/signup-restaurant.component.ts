import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ImpApiService } from 'src/app/services/imp-api.service';

@Component({
  selector: 'app-signup-restaurant',
  templateUrl: './signup-restaurant.component.html',
  styleUrls: ['./signup-restaurant.component.scss']
})
export class SignupRestaurantComponent implements OnInit {

  // }
  signup_restaurant_form = null;
  selectedImg :File | null = null
  constructor(private impApiService: ImpApiService, private Route: Router, private fb: FormBuilder, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.signup_restaurant_form = {
      email: ['', Validators.email],
      restaurant_name: ['', Validators.required],
      phone: ['', Validators.required],
      name: ['', Validators.required],
      password: ['', Validators.required], // pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$')],
      restaurant_photo: ['', Validators.required],
      health_certificate: ['', Validators.required],
      commercial_register: ['', Validators.required],
      logo: ['', Validators.required],
      description: ['', Validators.required],
    }
  }
  selectImg(event){
    this.selectedImg = event.target.files[0];
  }

signup_rest(){

 

    const formData = new FormData();
    formData.append('logo', this.selectedImg);
    formData.append('commercial_register', this.selectedImg);
    formData.append('health_certificate', this.selectedImg);
    formData.append('restaurant_photo', this.selectedImg);

    console.log(formData);



 }
}
