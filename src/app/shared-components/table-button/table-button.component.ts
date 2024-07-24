import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-button',
  templateUrl: './table-button.component.html',
  styleUrls: ['./table-button.component.scss']
})
export class TableButtonComponent implements OnInit {

  @Input() statement: string = '';
  @Input() type: any;
  constructor() { }

  ngOnInit(): void {
  }

}
