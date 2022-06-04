import {Component, OnInit} from '@angular/core';
import {IMovie} from "../../interfaces";
import {MoviesService} from "../../services";
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  movies: IMovie[]

  query: number = 1

  genres: string[] = []

  curr_page: number = 1

  total_pages: number

  constructor(private dataService: DataService, private moviesService: MoviesService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.dataService.storage.subscribe(genr => {
      if(genr) {
        let index = this.genres.indexOf(genr.toString())

        if (index !== -1) { // перевіряє чи є жанр у масиві жанрів
          this.genres.splice(index, 1) // видаляє якщо є
          this.router.navigate([''], {queryParams: {with_genres: this.genres.toString()}})
        } else {
          this.genres.push(genr.toString()) // додає якщо нема
          this.router.navigate([''], {queryParams: {with_genres: this.genres.toString()}})
        }
        if (this.genres.length === 0){ // якщо зняти галочки з усіх жанрів, з урли зникають парамси
          this.router.navigate([''])
        }
        console.log(this.genres)
      }
    })

    this.activatedRoute.queryParams.subscribe(value => {

      if (!value['page'] && !value['with_genres']) { //якщо в урлі нічого немає то робимо запит
        this.moviesService.getAllByParams(1).subscribe(movies => {
          this.movies = movies.results
          this.total_pages = movies.total_pages
          console.log('нема ні жанру ні сторінки')

          this.query = 1
        })
      } else if (!value['page']){ //якщо тільки масив жанрів

        this.moviesService.getAllByParams(1, value['with_genres']).subscribe(movies => {
          this.movies = movies.results

          this.genres = value['with_genres'].split(',')

          this.total_pages = movies.total_pages
          this.curr_page = movies.page

        })
      } else if (!value['with_genres']){ // якщо є тільки номер сторінки
        this.moviesService.getAllByParams(value['page']).subscribe(movies => {

          this.movies = movies.results
          this.query = value['page']
          this.curr_page = movies.page
        })
      } else { //якщо є і жанр і урла
        this.moviesService.getAllByParams(value['page'], value['with_genres']).subscribe(movies => {

          this.movies = movies.results
          this.query = value['page']
          this.genres = value['with_genres'].split(',')
          this.curr_page = movies.page
        })
      }
    })
  }


  next(): void {
    this.query = ++this.query
    if(this.genres.length > 0){
    this.router.navigate([''], {queryParams: {page: this.query,  with_genres:this.genres.toString()}})
    } else {
      this.router.navigate([''], {queryParams: {page: this.query}})
    }
  }

  prev(): void {
    this.query = --this.query
    if(this.genres.length > 0){
      this.router.navigate([''], {queryParams: {page: this.query,  with_genres:this.genres.toString()}})
    } else {
      this.router.navigate([''], {queryParams: {page: this.query}})
    }
  }


}
// це найважчі  стрічки коду в моєму житті
