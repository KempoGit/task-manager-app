import { ActionReducerMap } from "@ngrx/store";

import { Todo } from "./todos/models/todo.model";
import { todoReducer } from "./todos/todo.reducer";
import { validFilters } from './todos/filter/filter.actions';
import { filterReducer } from "./todos/filter/filter.reducer";

export interface AppState {
    todos: Todo[],
    filter: validFilters
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filter: filterReducer
}