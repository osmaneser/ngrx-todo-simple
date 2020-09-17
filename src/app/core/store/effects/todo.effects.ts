import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { TodoService } from '../../services/todo.service';

import { catchError, map, switchMap } from 'rxjs/operators'

import * as TodoActions from '../actions/todo.actions';
import { Todo } from 'src/app/shared/models/todo';

@Injectable()
export class TodoEffects{
  constructor(private actions$: Actions, private todoService: TodoService){}

  @Effect()
  fetchTodo = this.actions$.pipe(

    ofType(TodoActions.FETCH_TODO_LIST),
    switchMap((todos:TodoActions.FetchTodoList) => {
      return this.todoService.getTodos().pipe(
        map(todos => {
          return new TodoActions.FetchTodoSuccess(todos);
        }),
        catchError(error => {
          return error;
        })

      )
    })

  )

  @Effect()
  storeTodo = this.actions$.pipe(

    ofType(TodoActions.STORE_TODO),
    switchMap((todo:TodoActions.StoreTodo)=> {
      return this.todoService.addTodo(todo.payload).pipe(

        map(todo => {
          console.log(todo);
          return new TodoActions.StoreTodoSuccess(todo);
        }),
        catchError(err => {
          return err;
        })

      )
    })

  )
}
