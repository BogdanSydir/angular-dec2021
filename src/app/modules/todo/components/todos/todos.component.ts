import { Component, OnInit } from '@angular/core';
import {TodoService} from "../../services";
import {ITodo} from "../../interfaces";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: ITodo[]
  constructor(private todoService:TodoService, private activatedRoute:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({todoData}) => this.todos = todoData)
  }

}
