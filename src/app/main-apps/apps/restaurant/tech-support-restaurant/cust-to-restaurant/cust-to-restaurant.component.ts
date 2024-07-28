import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cust-to-restaurant',
  templateUrl: './cust-to-restaurant.component.html',
  styleUrls: ['./cust-to-restaurant.component.scss']
})
export class CustToRestaurantComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  openModal(modal) {
    this.modalService.open(modal, { centered: true })
  }
}
