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

  query: number

  genres: number[] = []

  constructor(private dataService: DataService, private moviesService: MoviesService, private router: Router, private activatedRoute: ActivatedRoute) {

    dataService.storage.subscribe(value => { // спрацьовує при зміні стораджа
      if (value) { //перевіряє чи клікнули на жанр (чи відпрацював метод)

        let index = this.genres.indexOf(value)

        if (index !== -1) { // перевіряє чи є жанр у масиві жанрів
          this.genres.splice(index, 1) // видаляє якщо є
        } else {
          this.genres.push(value) // додає якщо нема
        }

      }
      //нижче сорт по жанрах для першої сторінки і перекидання на першу сторінку якщо змінюється масив вибраних жанрів

      // if (this.genres.length > 0) {
      //   this.router.navigate([''], {queryParams: {with_genres: this.genres.toString()}})
      //   moviesService.getAllByParams(1, this.genres.toString()).subscribe(value => {
      //     this.movies = value.results
      //     console.log('constructor if')
      //   })
      // } else {
      //   moviesService.getAllByParams(1).subscribe(value => {
      //     this.movies = value.results
      //     console.log('constructor else')
      //   })
      // }
      //   console.log(this.genres)
    })
  }


  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe(value => {
      this.query = value['page'] // записуємо номер який передали в урлу

      if (!this.query) { // якщо нема (на 0 сторінці) то
        this.query = 1   //присвоюємо значення нульовій сторінці

        this.moviesService.getAllByParams(this.query).subscribe(value => {
          this.movies = value.results
          console.log('init if')
        })

      } else { // якщо на сторінці (перехід по урлі) то запит з page=query
        this.moviesService.getAllByParams(this.query).subscribe(value => {
          this.movies = value.results
          console.log('init else')
          console.log(this.genres)
        })
      }

    })
  }


  next(): void {
    if(this.genres.length > 0){
      this.query = ++this.query
      this.router.navigate([''], {queryParams: {page: this.query, with_genres:this.genres.toString()}})
      this.moviesService.getAllByParams(this.query, this.genres.toString()).subscribe(value => {
        this.movies = value.results
      })
    }
    else {
    this.query = ++this.query
    this.router.navigate([''], {queryParams: {page: this.query}})
    this.moviesService.getAllByParams(this.query).subscribe(value => {
      this.movies = value.results
    })
    }
  }

  prev(): void {
    this.query = --this.query
    this.router.navigate([''], {queryParams: {page: this.query}})
    this.moviesService.getAllByParams(this.query).subscribe(value => {
      this.movies = value.results
    })
  }


}
