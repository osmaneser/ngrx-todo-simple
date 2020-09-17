import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/shared/models/todo';

@Injectable({providedIn: 'root'})
export class TodoService {
  constructor(private http: HttpClient) { }


  getTodos() :Observable<any>{
    return this.http.get('https://localhost:44364/todo/listTodo');
  }
  addTodo(todo:Todo) :Observable<any>{
    return this.http.post('https://localhost:44364/todo/AddTodo',todo);
  }

}
