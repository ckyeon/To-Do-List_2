import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './share/todo.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable()
export class TodoService {
  Url = 'http://localhost:4003/';  // URL to web api

  constructor(private http: HttpClient) {}

  /* Todo list 받아오기 */
  getTodo(callback: any) {
    this.http.get(this.Url).subscribe(callback);
  }

  /* Todo list 추가하기 */
  addTodo(text: string, callback: any) {
    console.log(text);
    this.http.post(this.Url, text).subscribe(callback);
  }

  /* Todo list 삭제하기 */
  deleteTodo(id: number, callback: any) {
    this.http.delete(this.Url + `${id}`).subscribe(callback);
  }

  /* Todo list 체크 활성화 하기 */
  updateTodo(todo: Todo, callback: any) {
    this.http.put(this.Url + `${todo._id}`, todo.done).subscribe(callback);
  }
}
