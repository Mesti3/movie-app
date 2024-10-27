import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SearchState } from './search.reducer';

export const selectSearchState = createFeatureSelector<SearchState>('search');


export const selectAllSearch = createSelector(
  selectSearchState,
  (state) => state.search 
);

export const selectSearchsError = createSelector(
  selectSearchState,
  (state) => state.error 
);
