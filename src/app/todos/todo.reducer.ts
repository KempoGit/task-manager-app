import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { clearTodo, createTodo, deleteTodo, editTodo, toggleAllTodo, toggleTodo } from './todo.actions';

export const initialState: Todo[] = [
    new Todo('Task 1'),
    new Todo('Task 2'),
    new Todo('Task 3'),
];

export const todoReducer = createReducer(
  initialState,
  on(createTodo, (state, { text }) => [...state, new Todo(text)]),
  on(deleteTodo, (state, { id } ) => state.filter(todo => todo.id !== id)),
  on(clearTodo, (state ) => state.filter(todo => !todo.completed)),
  on(toggleTodo, (state, { id }) => state.map(todo => {
      let newTodo = {...todo}
      if (todo.id === id) {
        newTodo = {...todo, completed: !todo.completed };
      }
      return newTodo;
    })
  ),
  on(toggleAllTodo, (state, { completed }) => state.map(todo => {
        return {...todo, completed: completed };
    })
  ),
  on(editTodo, (state, { id, text }) => state.map(todo => {
      let newTodo = {...todo}
      if (todo.id === id) {
        newTodo = {...todo, text: text };
      }
      return newTodo;
    })
  ),
);