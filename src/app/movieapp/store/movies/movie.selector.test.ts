import { selectAllMovies, selectMoviesError, selectPopularMovies, selectMovieState } from './movie.selector';
import { MovieState } from './movie.reducer';
import { Movie } from './movie.model';

describe('Movie Selectors', () => {
  const initialState: MovieState = {
    movies: [{
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
    }],
    popular: [{
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
    }],
    error: null,
    loading: false,
    currentPage: 1,
  };

  it('should select the movie state', () => {
    const result = selectMovieState.projector(initialState);
    expect(result).toEqual(initialState);
  });

  it('should select all movies', () => {
    const result = selectAllMovies.projector(initialState);
    expect(result).toEqual(initialState.movies);
  });

  it('should select movies error', () => {
    const result = selectMoviesError.projector(initialState);
    expect(result).toEqual(initialState.error);
  });

  it('should select popular movies', () => {
    const result = selectPopularMovies.projector(initialState);
    expect(result).toEqual(initialState.popular);
  });
});
