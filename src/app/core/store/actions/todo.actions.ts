import { Action } from '@ngrx/store';
import { Todo } from 'src/app/shared/models/todo';

export const FETCH_TODO_LIST = "[Todo] Fetch Todo List";
export const FETCH_TODO_SUCCESS = "[Todo] Fetch Todo Success";

export const STORE_TODO = "[Todo] Store Todo";
export const STORE_TODO_SUCCESS = "[Todo] Store Todo Success";


export class FetchTodoList implements Action{
   readonly type = FETCH_TODO_LIST;
}
export class FetchTodoSuccess implements Action{
  readonly type = FETCH_TODO_SUCCESS;
  constructor(public payload: Todo[]){}
}

export class StoreTodo implements Action{
  readonly type = STORE_TODO;
  constructor(public payload:Todo){}
}

export class StoreTodoSuccess implements Action{
  readonly type = STORE_TODO_SUCCESS;
  constructor(public payload:Todo){}
}


export type TodoActions = StoreTodo | StoreTodoSuccess | FetchTodoList | FetchTodoSuccess;
