import {Component, Input, OnInit} from '@angular/core';
import {IMovie} from "../../interfaces";

@Component({
  selector: 'app-movies-list-card',
  templateUrl: './movies-list-card.component.html',
  styleUrls: ['./movies-list-card.component.css']
})
export class MoviesListCardComponent implements OnInit {

  @Input()
  movie: IMovie

  constructor() { }

  ngOnInit(): void {
  }

}
