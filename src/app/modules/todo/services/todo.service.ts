import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ITodo} from "../interfaces";
import {urls} from "../../../constants";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient:HttpClient) {
  }

  getAll(): Observable<ITodo[]>{
    return this.httpClient.get<ITodo[]>(urls.todos)
  }

  getById(id:string): Observable<ITodo>{
    return this.httpClient.get<ITodo>(`${urls.todos}/${id}`)
  }
}
