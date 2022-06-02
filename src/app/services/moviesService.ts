import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {urls} from "../constants";
import {IMovieDetails} from "../interfaces";

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.httpClient.get<any>(`${urls.movies}`)
  }

  getAllByParams(page:number, genres?:string | null): Observable<any> {
    if(!genres){
    return this.httpClient.get<any>(`${urls.movies}?page=${page}`)
    } else {
      return this.httpClient.get<any>(`${urls.movies}?page=${page}&with_genres=${genres}`)
    }

  }

  getById(id:number): Observable<IMovieDetails>{
    return this.httpClient.get<IMovieDetails>(`${urls.movie}/${id}`)
  }
}
