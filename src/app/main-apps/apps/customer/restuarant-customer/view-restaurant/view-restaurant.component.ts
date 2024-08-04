import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImpApiService } from 'src/app/services/imp-api.service';
import { Customer_home } from 'src/constent/Route';

@Component({
  selector: 'app-view-restaurant',
  templateUrl: './view-restaurant.component.html',
  styleUrls: ['./view-restaurant.component.scss']
})
export class ViewRestaurantComponent implements OnInit {

  arr_restaurant_card: any

  constructor(private impApiService: ImpApiService, private Route: Router) { }

  ngOnInit() {



    this.get_Restaurant();

      }

      get_Restaurant(){

        this.impApiService.get(Customer_home.restaurant_card.getCard).subscribe(
          (res) => {
            console.log(res.data);
            this.arr_restaurant_card = res.data.filter((item) => item !== null);
            
          }
        );

      }


}
