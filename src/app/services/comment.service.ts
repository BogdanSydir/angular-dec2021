import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IComment} from "../model/IComment";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) {
  }

  getComments(): Observable<IComment[]> {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/comments')
  }
}
