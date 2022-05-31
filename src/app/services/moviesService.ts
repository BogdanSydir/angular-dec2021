import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {urls} from "../constants";
import {ActivatedRoute} from "@angular/router";

@Injectable({
  providedIn:'root'
})

export class MoviesService{

  constructor(private httpClient:HttpClient, private activatedRoute:ActivatedRoute) {
  }
//todo
  getAll(): Observable<any>{
    console.log(this.activatedRoute.queryParams);
    return this.httpClient.get<any>(urls.movies)
  }
}
