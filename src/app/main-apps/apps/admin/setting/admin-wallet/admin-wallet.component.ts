import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-wallet',
  templateUrl: './admin-wallet.component.html',
  styleUrls: ['./admin-wallet.component.scss']
})
export class AdminWalletComponent implements OnInit {

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
        status: 'مقبول',

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
