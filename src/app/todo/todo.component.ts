import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from '../shared/models/todo';

import * as TodoActions from '../core/store/actions/todo.actions';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor(private store: Store<{todos:{todos : Todo[]}}>) { }

  todos: Observable<{todos: Todo[]}>;
  todoForm:FormGroup;

  ngOnInit(): void {

    this.loadData();

    this.todoForm = new FormGroup({
      name:new FormControl('',Validators.required),
      description:new FormControl('',Validators.required),
      importance:new FormControl(1,Validators.required),
      isAssign:new FormControl(0,Validators.required)
    })


    this.store.dispatch(new TodoActions.FetchTodoList())

    this.store.select('todos').subscribe((todos)=>{
      console.log(todos);
    })
  }


  ngSubmit(){
    console.log(this.todoForm);

    this.store.dispatch(new TodoActions.StoreTodo(this.todoForm.value));
  }


  loadData(){
    this.todos = this.store.select('todos');
  }

}
