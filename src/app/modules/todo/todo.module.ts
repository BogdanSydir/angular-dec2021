import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './components/todo/todo.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';
import {TodoService} from "./services";
import {TodoResolver} from "./services/todo.resolver";


@NgModule({
  declarations: [
    TodoComponent,
    TodosComponent,
    TodoDetailsComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule
  ],
  providers: [
    TodoService,
    TodoResolver
  ]
})
export class TodoModule { }
