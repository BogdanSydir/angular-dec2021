import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {urls} from "../constants";

@Injectable({
  providedIn:'root'
})
export class GenreService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<any>{
    return this.httpClient.get<any>(urls.genres)
  }
}
