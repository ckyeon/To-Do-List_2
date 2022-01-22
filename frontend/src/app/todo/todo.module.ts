import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';
import {FormsModule} from "@angular/forms";
import { AddTodoComponent } from './todos/add-todo/add-todo.component';



@NgModule({
  declarations: [
    TodosComponent,
    AddTodoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TodosComponent
  ]
})
export class TodoModule { }
