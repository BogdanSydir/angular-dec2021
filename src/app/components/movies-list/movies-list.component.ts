import { Component, OnInit } from '@angular/core';
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

  constructor(private moviesService:MoviesService,private router:Router) { }

  ngOnInit(): void {
    this.moviesService.getAll().subscribe(value => {
      this.movies = value.results
    })
  }

  next(): void{
    this.router.navigate([''], {queryParams: {page: '2'}})
  }

}
