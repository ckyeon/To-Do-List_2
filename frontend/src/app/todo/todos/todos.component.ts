import { Component, OnInit } from '@angular/core';
import {Todo} from "../share/todo.model";
import { HttpClient} from '@angular/common/http';
import {TodoService} from "./service/todo.service";

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

  constructor(private http: HttpClient, private service: TodoService) {
    this.todos = [
      {_id: 1, done: false, text: "운동하기"}
    ];
  }

  ngOnInit(): void {
    this.getTodo();
  }

  toggleTodo(todo: any){
    todo.done = !todo.done

    const onSuccess = () => {
      this.ngOnInit();
    }
    this.service.updateTodo(todo, onSuccess);
  }

  getTodo(){
    const onSuccess = (res: any) => {
      const todo = res.data;
      this.todos = todo;
    }
    this.service.getTodo(onSuccess);
  }

  addTodo(text: string){
    const onSuccess = () => {
      this.ngOnInit();
    }
    this.service.addTodo(text, onSuccess);
  }

  deleteTodo(id: number){
    const onSuccess = (res: any) => {
      if(res.status === 200){
        this.ngOnInit();
        return;
      }
    }
    this.service.deleteTodo(id, onSuccess);
  }

  AllCompleteTodo(){
    const onSuccess = () => {
      this.ngOnInit();
    }
    this.todos.forEach((obj) => {
      if (obj.done === false) {
        obj.done = !obj.done
      }
      this.service.updateTodo(obj, onSuccess);
    });
  }

  AllResetTodo(){
    const onSuccess = () => {
      this.ngOnInit();
    }
    this.todos.forEach((obj) => {
      if (obj.done === true) {
        obj.done = !obj.done
      }
      this.service.updateTodo(obj, onSuccess);
    });
  }

  AllDeleteTodo(){
    this.todos.forEach((obj) => {
      this.deleteTodo(obj._id);
    });
  }
}
