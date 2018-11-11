import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hw-panel',
  templateUrl: './hw-panel.component.html',
  styleUrls: ['./hw-panel.component.css']
})
export class HwPanelComponent implements OnInit {

  @Input() hwDataSource: Object;
  displayedColumns: string[] = ['HwNumber', 'HwDesc', 'HwDueDate'];

  constructor() { }

  ngOnInit() {
  }

}
