import { createAction, props } from '@ngrx/store';
import { Movie } from './movie.model';

export const messagesKey = '[Movie]';

export enum MovieActionTypes {
  getMovie = `${messagesKey} Get Movies` ,
  getPopularMovie = `${messagesKey} Get Popular Movies` ,
  LoadMovie = `${messagesKey} Load Movies`,
  Error = `${messagesKey} Load Movies Failure`,
  Search = `${messagesKey} Search Movies`,
  Popular = `${messagesKey} Popular Movies`
}

export const getMovie = createAction(
  MovieActionTypes.getMovie,
  props<{ page: number }>()
);

export const getPopularMovie = createAction(
  MovieActionTypes.getPopularMovie,
  props<{ page: number }>()
);

export const loadMoviesSuccess = createAction(
  MovieActionTypes.LoadMovie,
  props<{ movies: Movie[] }>()
);
export const loadMoviesFailure = createAction(
  MovieActionTypes.Error,
  props<{ error: string }>()
);

export const loadPopularMovies = createAction(
  MovieActionTypes.Popular,
  props<{ movies: Movie[] }>()
)
