import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {TodoService} from "./todo.service";
import {ITodo} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class TodoResolver implements Resolve<ITodo[]> {

  constructor(private todoService:TodoService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ITodo[]> | Promise<ITodo[]> | ITodo[] {
    return this.todoService.getAll()
  }
}
