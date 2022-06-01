import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MoviesService} from "../../services";
import {IMovieDetails} from "../../interfaces";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie: IMovieDetails

  constructor(private activatedRoute: ActivatedRoute, private moviesService: MoviesService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.moviesService.getById(id).subscribe(value => {
        this.movie = value
        console.log(this.movie)
      })
    })
  }

}
