import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {TodoService} from "../../services";
import {ITodo} from "../../interfaces";

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {

  todo:ITodo
  constructor(private activatedRoute: ActivatedRoute, private todoService: TodoService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(({id}) => {
      this.todoService.getById(id).subscribe(value => this.todo = value)
    })
  }

}
