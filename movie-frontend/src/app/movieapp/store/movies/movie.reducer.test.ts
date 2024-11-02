import { movieReducer, initialState, MovieState } from './movie.reducer';
import { loadMoviesSuccess, loadMoviesFailure, loadPopularMovies } from './movie.action';
import { Movie } from './movie.model';

describe('Movie Reducer', () => {
  it('should return the initial state', () => {
    const action = { type: '' };
    const state = movieReducer(undefined, action);
    expect(state).toEqual(initialState);
  });

  it('should handle loadMoviesSuccess', () => {
    const movies: Movie[] = [{
        id: 1, title: 'Test Movie',
        overview: '',
        release_date: '',
        vote_average: 0,
        vote_count: 0,
        poster_path: '',
        backdrop_path: '',
        genre_ids: [],
        popularity: 0,
        adult: false,
        original_language: '',
        original_title: '',
        video: false
    }];
    const action = loadMoviesSuccess({ movies });
    const state = movieReducer(initialState, action);
    expect(state.movies).toEqual(movies);
  });

  it('should handle loadPopularMovies', () => {
    const popularMovies: Movie[] = [{
        id: 2, title: 'Popular Movie',
        overview: '',
        release_date: '',
        vote_average: 0,
        vote_count: 0,
        poster_path: '',
        backdrop_path: '',
        genre_ids: [],
        popularity: 0,
        adult: false,
        original_language: '',
        original_title: '',
        video: false
    }];
    const action = loadPopularMovies({ movies: popularMovies });
    const state = movieReducer(initialState, action);
    expect(state.popular).toEqual(popularMovies);
  });

  it('should handle loadMoviesFailure', () => {
    const error = 'Error loading movies';
    const action = loadMoviesFailure({ error });
    const state = movieReducer(initialState, action);
    expect(state.error).toEqual(error);
  });
});
