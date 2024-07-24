import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-order',
  templateUrl: './user-order.component.html',
  styleUrls: ['./user-order.component.scss']
})
export class UserOrderComponent implements OnInit {
  arr:any

  constructor() {
    this.arr = [
      {
        name: 'name1',
        email: 'some1@gmail.com',
        custnum: 321459996,
      },

      {
        name: 'name2',
        email: 'some2@gmail.com',
        custnum: 321335456,
      },

      {
        name: 'name3',
        email: 'some3@gmail.com',
        custnum: 321246456,
      },

    ]

  }

  ngOnInit(): void {
  }

}
