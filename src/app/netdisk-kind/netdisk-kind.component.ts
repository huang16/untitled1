import {Component, Input, OnInit} from '@angular/core';
import {NetdiskListService, NetdiskItemDetail} from '../netdisk-list.service';
import {Subscriber, Subscription} from 'rxjs';

@Component({
  selector: 'app-netdisk-kind',
  templateUrl: './netdisk-kind.component.html',
  styleUrls: ['./netdisk-kind.component.css']
})
export class NetdiskKindComponent implements OnInit {
  displayKind = 1;
  getTimes = 0;
  subscripthandler = new Subscription();

  netdiskItemContainer: NetdiskItemDetail[];

  constructor(private netdiskListService: NetdiskListService) {
  }

  ngOnInit() {
    this.getNDIL(this.displayKind, this.getTimes);
  }

  setDisplayKind(i: number) {
    if (this.displayKind !== i) {
      this.displayKind = i;
      this.getTimes = 0;
      this.getNDIL(i, 0);
    }
  }

  getNDIL(kind: number, times: number) {
    // 网盘项目种类表只有初始的recommend和materialtemplate时，获取完整的项目种类表
    if (NetdiskListService.netdiskKind.length === 0) {
      NetdiskListService.netdiskKind.push('recommend');
      NetdiskListService.netdiskKind.push('materialtemplate');
      this.subscripthandler = this.netdiskListService.getNetdiskKindList()
        .subscribe(netdiskKindList => {
          console.log(netdiskKindList);
          NetdiskListService.netdiskKind = netdiskKindList;
          this.subscripthandler.unsubscribe();
        });
    }
    // 第一次获取网盘条目内容时初始化装载条目内容的数组
    if (times === 0) {
      this.netdiskItemContainer = [];
    }
    // 请求网盘条目内容
    this.netdiskListService.getNetdiskItemList(kind, times)
      .subscribe(newNetdiskItemList => {
        console.log(newNetdiskItemList);
        for (let i = 0; i < newNetdiskItemList.length; i++) {
          this.netdiskItemContainer.push(newNetdiskItemList[i]);
        }
        console.log(this.netdiskItemContainer);
      });
    this.getTimes += 1;

  }

}
