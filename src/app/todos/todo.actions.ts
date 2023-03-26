import { createAction, props } from '@ngrx/store';

export const createTodo = createAction(
    '[TODO Component] Create Todo',
    props<{text: string}>()
);

export const toggleTodo = createAction(
    '[TODO Component] Toggle Todo',
    props<{id: number}>()
);

export const toggleAllTodo = createAction(
    '[TODO Component] Toggle All Todo',
    props<{completed: boolean}>()
);

export const editTodo = createAction(
    '[TODO Component] Edit Todo',
    props<{id: number, text: string}>()
);

export const deleteTodo = createAction(
    '[TODO Component] Delete Todo',
    props<{id: number}>()
);

export const clearTodo = createAction(
    '[TODO Component] Clear Todo'
);