import { Action, createReducer, on } from '@ngrx/store';
import { setFilter, validFilters } from './filter.actions';

export var initialState: validFilters = 'all';

export const filterReducer = createReducer<validFilters, Action>(
  initialState,
  on(setFilter, (state, { filter }) => filter),
);