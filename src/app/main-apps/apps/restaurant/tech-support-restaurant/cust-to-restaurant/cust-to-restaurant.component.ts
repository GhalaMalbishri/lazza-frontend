import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ImpApiService } from 'src/app/services/imp-api.service';
import { tech_support_restaurant } from 'src/constent/Route';

@Component({
  selector: 'app-cust-to-restaurant',
  templateUrl: './cust-to-restaurant.component.html',
  styleUrls: ['./cust-to-restaurant.component.scss']
})
export class CustToRestaurantComponent implements OnInit {
arr: any;
  constructor(private impApiService: ImpApiService, private Route: Router, private fb: FormBuilder, private toastr: ToastrService, private modalService: NgbModal , private spinner : NgxSpinnerService) { }

  ngOnInit(): void {
  this.get_all_messages();

  }


get_all_messages(){

  this.impApiService.get(tech_support_restaurant.cust_to_restaurant.show_cust_massages).subscribe(res =>{
  console.log(res);
 })
}








  openModal(modal) {
    this.modalService.open(modal, { centered: true })
  }
}
