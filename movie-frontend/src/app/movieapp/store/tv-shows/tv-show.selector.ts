import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TVShowState } from './tv-show.reducer';

export const selectTVShowState = createFeatureSelector<TVShowState>('tvshow');

export const selectAllTVShows = createSelector(
  selectTVShowState,
  (state) => state.tvshows
);

export const selectTVShowsError = createSelector(
  selectTVShowState,
  (state) => state.error 
);

export const selectPopularTVShows = createSelector(
  selectTVShowState,
  (state) => state.tvshows
);