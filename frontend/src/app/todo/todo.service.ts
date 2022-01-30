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

  /** GET todos from the server */
  getTodo(callback: any) {
    this.http.get(this.Url + 'todolist').subscribe(callback);
  }

  /** POST: DB에 새로운 todo를 추가합니다. */
  addTodo(todo: Todo, callback: any) {
    this.http.post(this.Url + 'addtodo', todo).subscribe(callback);
  }

  /** DELETE: DB에서 todo를 삭제합니다. */
  deleteTodo(id: number, callback: any) {
    this.http.delete(this.Url + 'deltodo/${id}').subscribe(callback);
  }

  /** PUT: DB 데이터를 수정합니다. HTTP 요청이 성공하면 새로운 todo 데이터를 반환합니다. */
  updateTodo(todo: Todo): Observable<Todo> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'my-new-auth-token');

    return this.http.put<Todo>(this.Url, todo, httpOptions)
  }
}
