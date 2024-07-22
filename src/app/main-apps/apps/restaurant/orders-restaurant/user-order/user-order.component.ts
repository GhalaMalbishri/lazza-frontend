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
        ornum: 10,
        custnum: 321456,
      },

      {
        name: 'name2',
        ornum: 10,
        custnum: 321456,
      },

      {
        name: 'name3',
        ornum: 10,
        custnum: 321456,
      },

    ]

  }

  ngOnInit(): void {
  }

}
