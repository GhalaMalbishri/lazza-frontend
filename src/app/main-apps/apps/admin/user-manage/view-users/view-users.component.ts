import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.scss']
})
export class ViewUsersComponent implements OnInit {

  arr:any

  constructor() {
    this.arr = [
      {
        name: 'name1',
        email: 'some1@gmail.com',
        phoneNum: 321456,
        accountStatus: 'مفعّل',
      },

      {
        name: 'name1',
        email: 'some1@gmail.com',
        phoneNum: 321456,
        accountStatus: 'معطّل',
      },

      {
        name: 'name1',
        email: 'some1@gmail.com',
        phoneNum: 321456,
        accountStatus: 'مفعّل',
      },

    ]

  }

  ngOnInit(): void {
  }

}
