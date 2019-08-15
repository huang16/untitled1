import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ErrMessageService} from './err-message.service';
import {catchError} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetdiskDetailService {

  constructor(
    private http: HttpClient,
    private messageService: ErrMessageService
  ) {
  }

  getNetdiskArticle(url: string): Observable<NetdiskArticle> {
    console.log(url);
    return this.http.get<NetdiskArticle>(url)
      .pipe(
        catchError(this.handleError<NetdiskArticle>('getNetdiskArticle', null))
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

export class NetdiskArticle {
  rid: string;
  title: string;
  authorid: string;
  createtime: string;
  lastedit: string;
  star: Star;
  mark: number;
  detail: ArticleDetail;
  comments: Comment[];
}

export class Star {
  up: number;
  down: number;

  star(): number {
    return this.up - this.down;
  }
}

export class ArticleDetail {
  summary: string;
  detailtext: string;
}

export class Comment {
  commentatorid: string;
  commenttext: string;
}
