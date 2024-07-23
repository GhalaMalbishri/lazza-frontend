import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() anyting: string = '';
  @Input() type: any;
  constructor() { }

  ngOnInit(): void {
  }

}
