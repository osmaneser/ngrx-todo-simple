import { Todo } from 'src/app/shared/models/todo';
import * as TodoActions from '../actions/todo.actions';


export interface State {
  todos: Todo[]
}

const initialState: State = {
  todos: []
}

export function todoReducer(state = initialState, action: TodoActions.TodoActions){
  switch (action.type) {

    case TodoActions.STORE_TODO_SUCCESS:
      return {...state, todos:[...state.todos, action.payload]}
    case TodoActions.FETCH_TODO_SUCCESS:
      return {...state, todos:[...state.todos, ...action.payload]}

    default:
      return state;
  }
}
