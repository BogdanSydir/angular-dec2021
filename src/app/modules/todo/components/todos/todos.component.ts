import { Component, OnInit } from '@angular/core';
import {TodoService} from "../../services";
import {ITodo} from "../../interfaces";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: ITodo[]
  constructor(private todoService:TodoService) {
  }

  ngOnInit(): void {
    this.todoService.getAll().subscribe(value => this.todos = value)
  }

}
