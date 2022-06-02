import {Component, Input, OnInit} from '@angular/core';
import {IGenre} from "../../interfaces";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-single-genre',
  templateUrl: './single-genre.component.html',
  styleUrls: ['./single-genre.component.css']
})
export class SingleGenreComponent implements OnInit {

  @Input()
  genre: IGenre

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }

  pushToGenres(){

    this.dataService.storage.next(this.genre.id)

  }
}
