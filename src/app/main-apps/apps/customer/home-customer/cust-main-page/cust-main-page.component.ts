import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ImpApiService } from 'src/app/services/imp-api.service';
import { Customer_home } from 'src/constent/Route';

@Component({
  selector: 'app-cust-main-page',
  templateUrl: './cust-main-page.component.html',
  styleUrls: ['./cust-main-page.component.scss']
})
export class CustMainPageComponent implements OnInit {

  intervalId: any
  loading = false
  arr: any
  arr_restaurant_card: any

  constructor(private impApiService: ImpApiService, private Route: Router, private modalService: NgbModal) { }

  ngOnInit() {

this.getAds();

this.get_Restaurant();

  }

  getAds(){
    this.loading = true;
    this.impApiService.get(Customer_home.restaurant_ad.show_ad).subscribe(
      (res) => {
        console.log(res.data);
        this.arr = res.data.filter((item) => item !== null);
        this.loading = false;
      },
      (error) => {
        this.loading = false;
      }
    );


  }

  get_Restaurant(){
    this.loading = true;
    this.impApiService.get(Customer_home.restaurant_card.getCard).subscribe(
      (res) => {
        console.log(res.data);
        this.arr_restaurant_card = res.data.filter((item) => item !== null);
        this.loading = false;
      },
      (error) => {
        this.loading = false;
      }
    );

  }


  openModal(modal) {
    this.modalService.open(modal, { centered: true });
  }
}

