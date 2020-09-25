import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '@robobai/api-interfaces';

@Component({
  selector: 'robobai-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.scss']
})
export class RecentComponent implements OnInit {

  @Input() productList: IProduct[];
  constructor() { }

  ngOnInit(): void {
  }

}
