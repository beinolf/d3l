import { Component, OnInit, Input } from '@angular/core';
import { ClassDataService } from '../Services/class-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent implements OnInit {

  @Input() type: string;

  constructor(private classData: ClassDataService) { }

  classes: Object;
  hwDataSource: Object;
  wlDataSource: Object;

  ngOnInit() {
    this.classData.getClasses().subscribe(data => this.classes = data);
    this.classData.getHomework().subscribe(data => this.hwDataSource = data);
    this.classData.getWishList().subscribe(data => this.wlDataSource = data);
  }
}
