import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../filter/filter.actions';
import { clearTodo } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  actualFilter: actions.validFilters = 'all';
  filters: actions.validFilters[] = ['all', 'complete', 'pending'];

  pending: number = 0;

  constructor( private store:Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe( state => {
      this.actualFilter = state.filter;
      this.pending = state.todos.filter( todo => !todo.completed).length;
    });
  }

  changeFilter(event: actions.validFilters) {
    this.store.dispatch( actions.setFilter( {filter: event} ) );
  }

  clear() {
    this.store.dispatch( clearTodo() );
  }

}
