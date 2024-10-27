import { createAction, props } from '@ngrx/store';
import { Search } from './search.model';

export const messagesKey = '[Search]';

export enum SearchActionTypes {
  getSearch = `${messagesKey} Get collection`,
  SearchSuccess = `${messagesKey} Search collection`,
  Error = `${messagesKey} Search Failure`,
}

export const getSearch = createAction(
  SearchActionTypes.getSearch,
  props<{ query: string , page: number }>()
)

export const loadsearchSuccess = createAction(
  SearchActionTypes.SearchSuccess,
  props<{ search: Search[] }>()
)

export const loadSearchFailure = createAction(
  SearchActionTypes.Error,
  props<{ error: string }>()
);