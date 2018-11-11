import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-wish-list-panel',
  templateUrl: './wish-list-panel.component.html',
  styleUrls: ['./wish-list-panel.component.css']
})
export class WishListPanelComponent implements OnInit {

  @Input() wlDataSource: Object;
  displayedColumns: string[] = ['Item', 'Price', 'ParentId'];
  constructor() { }

  ngOnInit() {
  }

}
