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

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  Url = 'http://localhost:4003/todolist';  // URL to web api

  constructor(private http: HttpClient) {}

  /** GET heroes from the server */
  get(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.Url)
  }

  /* 입력된 단어가 포함된 히어로 목록을 GET 방식으로 요청합니다. */
  search(term: string): Observable<Todo[]> {
    term = term.trim();

    // 전달된 인자로 HttpParams 객체를 생성합니다.
    const options = term ?
      { params: new HttpParams().set('name', term) } : {};

    return this.http.get<Todo[]>(this.Url, options)
  }

  /** POST: DB에 새로운 히어로를 추가합니다. */
  add(todo: Todo): Observable<Todo> {
    console.log("할일 추가");
    return this.http.post<Todo>(this.Url, todo, httpOptions)
  }

  /** DELETE: DB에서 히어로를 삭제합니다. */
  delete(id: number): Observable<unknown> {
    const url = `${this.Url}/${id}`;
    return this.http.delete(url, httpOptions)
  }

  /** PUT: DB 데이터를 수정합니다. HTTP 요청이 성공하면 새로운 히어로 데이터를 반환합니다. */
  update(todo: Todo): Observable<Todo> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'my-new-auth-token');

    return this.http.put<Todo>(this.Url, todo, httpOptions)
  }
}
