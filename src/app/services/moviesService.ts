import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  // page: number = '1'

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.httpClient.get<any>(`${urls.movies}`)
  }

  getAllByParams(page:number): Observable<any> {
    // this.activatedRoute.queryParams.subscribe(params => {
    //   this.page = params['page']
    // })
    console.log(page);
    return this.httpClient.get<any>(`${urls.movies}?page=${page}`)
  }
}
