import { Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

  constructor(private router: Router) { }

  send(){
    this.goToOtpPage();
  }

  goToOtpPage(){
    this.router.navigate(['../write-otp']);
  }

  ngOnInit(): void {
  }

}
