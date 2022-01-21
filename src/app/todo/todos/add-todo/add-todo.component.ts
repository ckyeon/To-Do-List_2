import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-todo',
  template: `
    <p>
      <button (click)="addTodo(newText)">+</button>
      <input type="text" placeholder=" 할 일 입력" [(ngModel)]="newText">
    </p>
  `,
  styles: [`
    :host {
      display: flex;
      width: 600px;
      padding: 5px;
      background-color: white;
    }

    input {
      display: inline-block;
      font-size: 16px;
      border: none;
    }

    input:focus, botton:focus {
      outline: none;
    }

    button {
      width: 24px;
      height: 24px;
      border-radius: 24px;
      color: white;
      font-size: 16px;
      line-height: 17px;
      border: 1px solid dimgray;
      background-color: #6b6bf5;
    }
  `]
})
export class AddTodoComponent implements OnInit {

  @Output() onTodoAdded = new EventEmitter();
  newText!: string;

  constructor() { }

  ngOnInit(): void {
  }

  addTodo(newText: string){
    // 버튼 누를 때마다 텍스트가 로드
    this.onTodoAdded.emit(newText);
    this.newText = '';
  }
}
