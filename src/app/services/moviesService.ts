import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {urls} from "../constants";

@Injectable({
  providedIn:'root'
})

export class MoviesService{

  constructor(private httpClient:HttpClient) {
  }
//todo
  getAll(): Observable<any>{
    return this.httpClient.get<any>(urls.movies)
  }
}
