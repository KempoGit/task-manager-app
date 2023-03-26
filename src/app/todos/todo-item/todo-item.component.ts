import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @ViewChild('physicalInput') textPhysicalInput!: ElementRef;
  checkCompleted!: FormControl;
  textInput!: FormControl;
  editing: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.checkCompleted = new FormControl(this.todo.completed);
    this.textInput = new FormControl(this.todo.text, Validators.required);

    this.checkCompleted.valueChanges.subscribe( value => {
      this.store.dispatch( actions.toggleTodo({ id: this.todo.id}) );
    })
  }

  edit() {
    this.editing = true;
    this.textInput.setValue(this.todo.text);
    setTimeout(() => {
      this.textPhysicalInput.nativeElement.select();
    }, 0);
  }
  
  finishEditing() {
    this.editing = false;

    if(this.textInput.invalid) { return; }
    if(this.textInput.value === this.todo.text) { return; }

    this.store.dispatch(
      actions.editTodo({
        id: this.todo.id,
        text: this.textInput.value
      })
    );
  }

  delete() {
    this.store.dispatch(actions.deleteTodo({ id: this.todo.id }));
  }

}
