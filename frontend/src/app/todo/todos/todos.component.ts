import { Component, OnInit } from '@angular/core';
import {Todo} from "../share/todo.model";
import { HttpClient} from '@angular/common/http';
import {TodoService} from "../todo.service";

// 뷰
@Component({  // 타입스크립트의 데코레이터 -> 일종의 함수, 컴포넌트가 어떻게 동작하는 지를 메타데이터로 전달
  selector: 'app-todos',  //선택자, css가 적용될 요소를 선택할 때 사용(element의 이름이 app-todos인 것을 선택자로 선택)
  templateUrl: './todos.component.html',   // 뷰에 대한 정의를 template으로 수행
  styleUrls: ['./todos.component.css']  // 여러 스타일 url을 가질 수 있다. 배열로 나열함
})

// 로직
export class TodosComponent implements OnInit  {  // 클래스가 하나의 컴포넌트, 속성과 메소드를 통해 뷰와 데이터를 주고받게 된다.
  // 속성
  todos: Todo[];
  newText: string = '';
  today: Date = new Date();
  _id: number = 0;
  text: string = '';
  done: boolean = false;

  constructor(private http: HttpClient, private service: TodoService) {
    this.todos = [];
  }

  ngOnInit(): void {
    this.getTodo();
  }

  toggleTodo(todo: any){
    // @ts-ignore
    const onSuccess = res => {
      todo.done = !todo.done
    }
    this.service.updateTodo(todo._id, todo.done, onSuccess);
  }

  getTodo(){
    // @ts-ignore
    const onSuccess = res => {
      const todo = res.data;
      this.todos = todo;
    }
    this.service.getTodo(onSuccess);
  }

  addTodo(text: string){
    // @ts-ignore
    this.service.addTodo(text);
    this.ngOnInit();
  }

  deleteTodo(id: number){
    // @ts-ignore
    const onSuccess = res => {
      if(res.status === 200){
        this.ngOnInit();
        return;
      }
    }
    this.service.deleteTodo(id, onSuccess);
  }

  AllCompleteTodo(){
    const items = document.querySelectorAll(".todoList");
    items.forEach((item) => item.classList.remove("done"));

    this.todos.forEach((obj) => {
      if (obj.done === false) {
        obj.done = true;
      }
    });
    let checks = document.querySelectorAll('#check');
    checks.forEach((check) => check.setAttribute('checked', 'true'));
  }

  AllResetTodo(){
    const items = document.querySelectorAll(".todoList");
    items.forEach((item) => item.classList.remove("done"));

    this.todos.forEach((obj) => {
      if (obj.done === true) {
        obj.done = false;
      }
    });
    let checks = document.querySelectorAll('#check');
    checks.forEach((check) => check.setAttribute('checked', 'false'));
  }

  AllDeleteTodo(){
    let todos = this.todos;
    todos.splice(0, todos.length);
  }
}
