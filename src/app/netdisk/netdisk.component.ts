import {Component, OnInit} from '@angular/core';
import {NetdiskListService} from '../netdisk-list.service';
import {NetdiskKindComponent} from '../netdisk-kind/netdisk-kind.component';

@Component({
  selector: 'app-netdisk',
  templateUrl: './netdisk.component.html',
  styleUrls: ['./netdisk.component.css']
})
export class NetdiskComponent implements OnInit {

  constructor() {

  }
  ngOnInit() {
  }

}
