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
  loading = false
  arr:any
  arrv2:any
  status_filter = ''

  constructor(private impApiService: ImpApiService, private Route: Router) {


  }

  ngOnInit(): void {
    this.loading = true
    this.impApiService.get(user_manage.view_users.alluser).subscribe(res =>{

      console.log(res.data);
      this.arr = res.data
      this.arrv2 = res.data
      this.loading = false
    }, (error)=>{
      this.loading = false
    })
  }

  filter_by_status(userChoice){
    this.status_filter = userChoice

    if(this.status_filter == ""){
      this.arr = this.arrv2
    }else{
      console.log(this.status_filter);

      this.arr = this.arrv2
      this.arr = this.arr.filter(data => data.account_status == this.status_filter)
    }


  }

}
