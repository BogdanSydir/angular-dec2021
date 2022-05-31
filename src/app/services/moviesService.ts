import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {IMovie} from "../interfaces";
import {urls} from "../constants";

@Injectable({
  providedIn:'root'
})

export class MoviesService{

  constructor(private httpClient:HttpClient) {
  }

  getAll(): Observable<any>{
    return this.httpClient.get<any>(urls.movies)
  }
}
