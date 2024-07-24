import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  arr:any;

  constructor() {
    this.arr = [
      {
        name: 'burger',
        price: 100,
      },
      {
        name: 'burger',
        price: 100,
      },
      {
        name: 'burger',
        price: 100,
      },
      {
        name: 'burger',
        price: 100,
      },
      {
        name: 'burger',
        price: 100,
      },
      {
        name: 'burger',
        price: 100,
      },
      {
        name: 'burger',
        price: 100,
      },
      {
        name: 'burger',
        price: 100,
      },


    ]
  }

  ngOnInit(): void {
  }

}
