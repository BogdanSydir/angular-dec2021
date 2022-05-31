import {Component, Input, OnInit} from '@angular/core';
import {IGenre} from "../../interfaces";

@Component({
  selector: 'app-single-genre',
  templateUrl: './single-genre.component.html',
  styleUrls: ['./single-genre.component.css']
})
export class SingleGenreComponent implements OnInit {

  @Input()
  genre: IGenre

  constructor() { }

  ngOnInit(): void {
  }

}
