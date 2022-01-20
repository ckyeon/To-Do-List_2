import {Component, Input, OnInit} from '@angular/core';
import {Todo} from "../../share/todo.model";

// inline은 따로 css, html이 있지 않고 함께 포함되어있다.
@Component({
  selector: 'app-todo',
  template: `
    <p>
      <input type="checkbox" [checked]="todo.done"><label>{{ todo.text }}</label>
    </p>
  `,
  styles: [`
  :host{
    display: block;
    padding: 15px;
    color: darkgray;
    background-color: white;
  }

  input{
    position: relative;
  }
  input:before{
    content: "";
    display: flex;
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 20px;
    position: absolute;
    top: -6px;
    left: -8px;
    border: 1px solid darkgray;
  }
  input:checked:after{
    content: '\\2713';
    display: flex;
    font-size: 16px;
    width: 20px;
    height: 20px;
    border-radius: 20px;
    position: absolute;
    top: -6px;
    left: -8px;
    border: 1px solid dimgray;
    background-color: dimgray;
    text-align: center;
    color: white;
  }
  input:checked + label{
    text-decoration: line-through;
  }
  `]
})
export class TodoComponent implements OnInit  {

  @Input() todo!: Todo;
  constructor() {
  }

  ngOnInit(): void {
  }
}
