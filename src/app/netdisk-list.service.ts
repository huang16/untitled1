import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ServerList} from './dataStruct/serverList';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {ErrMessageService} from './err-message.service';

const httpOption = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class NetdiskListService {

  constructor(
    private http: HttpClient,
    private messageService: ErrMessageService
  ) {
    NetdiskListService.netdiskKindListUrl = NetdiskListService.serverList.serverList[0] + '/netdisk' + '/type';
    console.log(NetdiskListService.netdiskKindListUrl);
    NetdiskListService.netdiskItemListUrl = NetdiskListService.serverList.serverList[0] + '/netdisk';
  }

  static netdiskKind: string[] = [];
  static netdiskItemListUrl: string;
  static netdiskKindListUrl: string;
  static serverList: ServerList = new ServerList();
  netdiskItemList: NetdiskItemDetail[];

  getNetdiskKindList(): Observable<string[]> {
    return this.http.get<string[]>(NetdiskListService.netdiskKindListUrl)
      .pipe(
        catchError(this.handleError<string[]>('getNetdiskKinds', []))
      );

  }


  getNetdiskItemList(kind: number, times: number): Observable<NetdiskItemDetail[]> {
    const url = NetdiskListService.netdiskItemListUrl + '/' + NetdiskListService.netdiskKind[kind]; //  + '/' + times;
    // const url = this.netdiskItemListUrl + '/materialtemplate';
    console.log(url);
    console.log(NetdiskListService.netdiskKind);
    return this.http.get<NetdiskItemDetail[]>(url)
      .pipe(
        catchError(this.handleError<NetdiskItemDetail[]>('getNetdiskItems', []))
      );

  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`${message}`);
  }

}


export class NetdiskItemDetail {
  name: string;
  resourse_type: string;
  url: string;
  cipher: string;
  rid: string;

  constructor(name: string, resourse_type: string, url: string, cipher: string, rid: string) {
    this.name = name;
    this.resourse_type = resourse_type;
    this.url = url;
    this.cipher = cipher;
    this.rid = rid;
  }
}
