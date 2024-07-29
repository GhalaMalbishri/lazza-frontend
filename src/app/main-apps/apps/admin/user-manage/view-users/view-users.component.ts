import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImpApiService } from 'src/app/services/imp-api.service';
import { user_manage } from 'src/constent/Route';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.scss']
})
export class ViewUsersComponent implements OnInit {

  arr:any

  constructor(private impApiService: ImpApiService, private Route: Router) {


  }

  ngOnInit(): void {
    this.impApiService.get(user_manage.view_users.alluser).subscribe(data =>{
      console.log(data.data);
      this.arr = data.data
    })
  }

}
