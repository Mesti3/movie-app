import { createReducer, on } from '@ngrx/store';
import {  loadsearchSuccess,loadSearchFailure } from './search.action';
import { Search } from './search.model';

export interface SearchState {
  search: Search[];
  error: string | null;
  loading: boolean;
  currentPage: number; 
}


export const initialState: SearchState = {
  search: [],
  error: null,
  loading: false,
  currentPage: 1,
};

export const SearchReducer = createReducer(
  initialState,
  on(loadsearchSuccess, (state,action) => ({ ...state, search:  action.search })),
  on(loadSearchFailure, (state, action) => ({...state, error: action.error}))
);
