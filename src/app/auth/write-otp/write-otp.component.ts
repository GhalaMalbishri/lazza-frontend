import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-write-otp',
  templateUrl: './write-otp.component.html',
  styleUrls: ['./write-otp.component.scss']
})
export class WriteOtpComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

}
