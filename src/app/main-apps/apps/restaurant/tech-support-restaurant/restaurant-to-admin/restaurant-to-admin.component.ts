import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ImpApiService } from 'src/app/services/imp-api.service';

@Component({
  selector: 'app-restaurant-to-admin',
  templateUrl: './restaurant-to-admin.component.html',
  styleUrls: ['./restaurant-to-admin.component.scss']
})
export class RestaurantToAdminComponent implements OnInit {
  massage_to_admin_form = null;
  constructor(private impApiService: ImpApiService, private Route: Router, private fb: FormBuilder, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.massage_to_admin_form = this.fb.group({
      massage: ['', Validators.required],
    })
  }

}
