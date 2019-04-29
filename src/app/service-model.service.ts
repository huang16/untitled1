import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ServerList} from './dataStruct/serverList';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import {ErrMessageService} from './err-message.service';
import {NetdiskItemDetail} from './netdisk-list.service';


const httpOption = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ServiceModelService {

  constructor(private http: HttpClient, private messageService: ErrMessageService) {

  }

  static netdiskKind: string[] = [];
  static serverList: ServerList = new ServerList();
  static netdiskItemListUrl = 'http://' + ServiceModelService.serverList[0] + '/netdisk';
  static netdiskKindListUrl = ServiceModelService.netdiskItemListUrl + '/type';
  netdiskItemList: NetdiskItemDetail[] = [];

  serviceInit() {
  }

  getNetdiskKindList() {
    let list = this.http.get<string[]>(ServiceModelService.netdiskKindListUrl).toPromise;
  }

}
