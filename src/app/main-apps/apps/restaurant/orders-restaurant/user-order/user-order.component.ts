import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ImpApiService } from 'src/app/services/imp-api.service';
import { orders_restaurant } from 'src/constent/Route';

@Component({
  selector: 'app-user-order',
  templateUrl: './user-order.component.html',
  styleUrls: ['./user-order.component.scss']
})
export class UserOrderComponent implements OnInit {
  orders_array:any
  constructor(private impApiService: ImpApiService, private Route: Router,private toastr: ToastrService, private modalService: NgbModal , private spinner : NgxSpinnerService) {

  }

  ngOnInit(): void {
    this.get_all_orders();
  }

  get_all_orders(){
    this.impApiService.get(orders_restaurant.user_order.all_order).subscribe(res=>{console.log(res);
    })
  }

  openModal(modal) {
    this.modalService.open(modal, { centered: true })
  }
}
