import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  arr: any
  constructor() {
    this.arr = [
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

}
