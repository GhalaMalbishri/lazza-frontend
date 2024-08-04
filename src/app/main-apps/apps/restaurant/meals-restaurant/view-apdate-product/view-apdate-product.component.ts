import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ImpApiService } from 'src/app/services/imp-api.service';
import { meals_restaurant } from 'src/constent/Route';

@Component({
  selector: 'app-view-apdate-product',
  templateUrl: './view-apdate-product.component.html',
  styleUrls: ['./view-apdate-product.component.scss']
})
export class ViewApdateProductComponent implements OnInit {

  add_section_form = null ;
  add_coupon_form = null ;
  constructor(private modalService: NgbModal,private impApiService:ImpApiService,private Route :Router,private fb: FormBuilder,private toastr: ToastrService) { }

  ngOnInit(): void {

    //add a section
    this.add_section_form = this.fb.group({
      section_name:['', Validators.required]
    })

    //add a coupon
      this.add_coupon_form = this.fb.group({
      discount_amount:['', Validators.required],
      code:['', Validators.required],
      end_date:['', Validators.required],
    })
  }

  openModal(modal) {
    this.modalService.open(modal, { centered: true })
  }

  SendSection(){

    console.log(this.add_section_form);
    this.impApiService.post(meals_restaurant.view_apdate_product.add_Section,this.add_section_form.value).subscribe(res=>{  console.log(res); })


      this.toastr.success("تمت اضافة القسم");
    }

    AddCoupon(){
        this.impApiService.post(meals_restaurant.view_apdate_product.add_coupon,this.add_coupon_form.value).subscribe(res1=>{console.log(res1);})
    }
  }



