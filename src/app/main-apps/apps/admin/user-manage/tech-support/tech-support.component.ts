import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech-support',
  templateUrl: './tech-support.component.html',
  styleUrls: ['./tech-support.component.scss']
})
export class TechSupportComponent implements OnInit {

  arr:any

  constructor() {
    this.arr = [
      {
        name: 'name1',
        amount: 456,
        date:'21/7/2024',
        transferType: 'سحب',
        status: 'مقبول',
      },

      {
        name: 'name2',
        amount: 363,
        date:'21/7/2024',
        transferType: 'إضافة',
        status: 'مرفوض',

      },

      {
        name: 'name3',
        amount: 222,
        date:'21/7/2024',
        transferType: 'سحب',
        status: 'مقبول',
      },

    ]

  }


  ngOnInit(): void {
  }

}
