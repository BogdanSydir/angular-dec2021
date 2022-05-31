import { Component, OnInit } from '@angular/core';
import {IGenre} from "../../interfaces";
import {GenreService} from "../../services";

@Component({
  selector: 'app-genre-badge',
  templateUrl: './genre-badge.component.html',
  styleUrls: ['./genre-badge.component.css']
})
export class GenreBadgeComponent implements OnInit {

  genres: IGenre[]

  constructor(private genreService:GenreService) { }

  ngOnInit(): void {
    this.genreService.getAll().subscribe(value => this.genres = value)
  }

}
