import { Component } from '@angular/core';
import { Store } from '@ngrx/store'
import { AppState } from 'src/app/app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent {

  complete: boolean = false;

  constructor(private store: Store<AppState>) { }

  toggleAll() {
    this.complete = !this.complete;
    this.store.dispatch( actions.toggleAllTodo({ completed: this.complete }) );
  }

}
