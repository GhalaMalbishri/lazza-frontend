import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-users-details',
  templateUrl: './view-users-details.component.html',
  styleUrls: ['./view-users-details.component.scss']
})
export class ViewUsersDetailsComponent implements OnInit {

  arr:any

  constructor() {
    this.arr = [
      {
        orderID: '268326',
        orderDate: '11/4/2024',
        PaymentMethod: 'المحفظة',
        deliveryMan_name: 'اسم 1',
      },

      {
        orderID: '268326',
        orderDate: '24/3/2024',
        PaymentMethod: 'تحويل',
        deliveryMan_name: 'اسم 2',
      },

      {
        orderID: '268326',
        orderDate: '5/4/2024',
        PaymentMethod: 'تحويل',
        deliveryMan_name: 'اسم 3',
      },

    ]

  }

  ngOnInit(): void {
  }

}
