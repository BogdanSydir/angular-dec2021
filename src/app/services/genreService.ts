import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {IGenre} from "../interfaces";
import {urls} from "../constants";

@Injectable({
  providedIn:'root'
})
export class GenreService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IGenre[]>{
    return this.httpClient.get<IGenre[]>(urls.genres)
  }
}
