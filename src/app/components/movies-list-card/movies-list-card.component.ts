import {Component, Input, OnInit} from '@angular/core';
import {IMovie} from "../../interfaces";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-movies-list-card',
  templateUrl: './movies-list-card.component.html',
  styleUrls: ['./movies-list-card.component.css']
})
export class MoviesListCardComponent implements OnInit {

  movieGenres: string[] = []

  genres: { id: number, name: string }[] = [
    {id: 12, name: "Adventure"},
    {id: 14, name: "Fantasy"},
    {id: 16, name: "Animation"},
    {id: 18, name: "Drama"},
    {id: 28, name: "Action"},
    {id: 27, name: "Horror"},
    {id: 35, name: "Comedy"},
    {id: 36, name: "History"},
    {id: 37, name: "Western"},
    {id: 53, name: "Thriller"},
    {id: 80, name: "Crime"},
    {id: 99, name: "Documentary"},
    {id: 878, name: "Science Fiction"},
    {id: 9648, name: "Mystery"},
    {id: 10402, name: "Music"},
    {id: 10751, name: "Family"},
    {id: 10749, name: "Romance"},
    {id: 10770, name: "TV Movie"},
    {id: 10752, name: "War"},
  ]





  @Input()
  movie: IMovie

  public form: FormGroup;

  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      rating: [''],
    })
  }


  rating(rat: number): number {

    return Math.round(rat / 2)
  }
  ngOnInit(): void {
    // console.log(this.movie.original_title);

    for (let movieGenre of this.movie.genre_ids) { // ітеруємо всі фільми по ід
      // console.log(movieGenre, 'movie genre')
      for (const genre of this.genres) {
        if (movieGenre === genre.id) {
          this.movieGenres.push(genre.name)
        }
        // console.log(genre.id, 'genre')
      }
    }
    // console.log(this.movieGenres)
  }
}
