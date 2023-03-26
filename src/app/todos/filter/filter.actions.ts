import { createAction, props } from '@ngrx/store';

export type validFilters = 'all' | 'complete' | 'pending' | 'none';

export const setFilter = createAction(
    '[Filter] Set Filter',
    props<{filter: validFilters}>()
);