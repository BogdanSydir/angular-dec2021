import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  storage = new BehaviorSubject<number | null>(null)

  constructor() { }
}
