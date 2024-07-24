import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ads-page',
  templateUrl: './ads-page.component.html',
  styleUrls: ['./ads-page.component.scss']
})
export class AdsPageComponent implements OnInit {

  arr:any

  constructor() {
    this.arr = [
      {
        name: 'name1',
        email: 'some1@gmail.com',
        restNum: 321456,
      },

      {
        name: 'name2',
        email: 'some2@gmail.com',
        restNum: 321456,
      },

      {
        name: 'name3',
        email: 'some3@gmail.com',
        restNum: 321456,
      },

    ]

  }

  ngOnInit(): void {
  }

}
