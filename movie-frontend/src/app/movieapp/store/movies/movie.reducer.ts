import { createReducer, on } from '@ngrx/store';
import {  loadMoviesSuccess, loadMoviesFailure, loadPopularMovies } from './movie.action';
import { Movie } from './movie.model';

export interface MovieState {
  movies: Movie[];
  popular: Movie[];
  error: string | null;
  loading: boolean;
  currentPage: number; 
}


export const initialState: MovieState = {
  movies: [],
  popular: [],
  error: null,
  loading: false,
  currentPage: 1,
};


export const movieReducer = createReducer(
    initialState,
  on(loadMoviesSuccess, (state,action) => ({ ...state, movies:  state.movies.concat(action.movies) })),
  on(loadPopularMovies, (state, action) => ({...state, popular:  state.popular.concat(action.movies)})),
  on(loadMoviesFailure, (state, action) => ({ ...state, error: action.error })),
);
