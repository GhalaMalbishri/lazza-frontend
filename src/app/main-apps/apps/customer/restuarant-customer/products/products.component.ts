import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ImpApiService } from 'src/app/services/imp-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  arr:any;

  constructor(private impApiService: ImpApiService, private Route: Router, private modalService: NgbModal) {

  }

  ngOnInit(): void {
  }

  openModal(modal) {
    this.modalService.open(modal, { size: 'md' })
  }

}
