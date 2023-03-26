import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { validFilters } from '../filter/filter.actions';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  todos: Todo[] = [];
  actualFilter: validFilters = 'all';

  constructor(private store: Store<AppState>) {
    this.store.subscribe( ({todos, filter}) => {
      this.todos = todos
      this.actualFilter = filter;
    });
  }

}
