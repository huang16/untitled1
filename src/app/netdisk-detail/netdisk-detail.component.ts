import {Component, OnInit} from '@angular/core';
import {NetdiskArticle, NetdiskDetailService} from '../netdisk-detail.service';
import {ServerList} from '../dataStruct/serverList';

@Component({
  selector: 'app-netdisk-detail',
  templateUrl: './netdisk-detail.component.html',
  styleUrls: ['./netdisk-detail.component.css']
})
export class NetdiskDetailComponent implements OnInit {

  detailModel: NetdiskArticle;
  serverList = new ServerList();

  constructor(private netdiskDetailService: NetdiskDetailService) {
  }

  ngOnInit() {
    console.log(location.pathname);
    this.detailInit( this.serverList.serverList[0] + location.pathname);
  }

  detailInit(url: string) {
    this.netdiskDetailService.getNetdiskArticle(url).subscribe(
      netdiskArticle => {
        console.log(netdiskArticle);
        this.detailModel = netdiskArticle;
      }
    );
  }

}
