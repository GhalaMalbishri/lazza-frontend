import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  arr: any
  constructor(private modalService: NgbModal) {
    this.arr =
    [
      {
        price: 15,
        meal: "Burger",
      },
      {
        price: 15,
        meal: "Burger",
      },
      {
        price: 15,
        meal: "Burger",
      },
      
    ]
  }

  ngOnInit(): void {
  }

    openModal(modal) {
    this.modalService.open(modal, { centered: true })
  }

}
