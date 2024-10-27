import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MovieState } from './movie.reducer';

export const selectMovieState = createFeatureSelector<MovieState>('movie');

export const selectAllMovies = createSelector(
  selectMovieState,
  (state) => state.movies 
);

export const selectMoviesError = createSelector(
  selectMovieState,
  (state) => state.error 
);

export const selectPopularMovies = createSelector(
  selectMovieState,
  (state) => state.popular
)
