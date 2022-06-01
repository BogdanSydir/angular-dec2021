import {Component, OnInit} from '@angular/core';
import {IMovie} from "../../interfaces";
import {MoviesService} from "../../services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  movies: IMovie[]

  page: number = 1

  constructor(private moviesService: MoviesService, private router: Router) {
  }

  ngOnInit(): void {

    this.router.navigate([''])

    this.moviesService.getAll().subscribe(value => {
      this.movies = value.results
    })
  }

  next(): void {
    this.page = this.page + 1

    this.router.navigate([''], {queryParams: {page: this.page}})

    this.moviesService.getAllByParams(this.page).subscribe(value => {
      this.movies = value.results
    })
  }
  prev(): void {
    this.page = this.page - 1
    this.router.navigate([''], {queryParams: {page: this.page}})
    this.moviesService.getAllByParams(this.page).subscribe(value => {
      this.movies = value.results
    })
  }

}
