import { loadMoviesSuccess, loadMoviesFailure, getMovie, getPopularMovie } from './movie.action';
import { Movie } from './movie.model';

describe('Movie Actions', () => {
  it('should create a getMovie action', () => {
    const page = 1;
    const action = getMovie({ page });
    expect(action.type).toBe('[Movie] Get Movies');
    expect(action.page).toBe(page);
  });

  it('should create a getPopularMovie action', () => {
    const page = 1;
    const action = getPopularMovie({ page });
    expect(action.type).toBe('[Movie] Get Popular Movies');
    expect(action.page).toBe(page);
  });

  it('should create a loadMoviesSuccess action', () => {
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
    expect(action.type).toBe('[Movie] Load Movies');
    expect(action.movies).toEqual(movies);
  });

  it('should create a loadMoviesFailure action', () => {
    const error = 'Error loading movies';
    const action = loadMoviesFailure({ error });
    expect(action.type).toBe('[Movie] Load Movies Failure');
    expect(action.error).toBe(error);
  });
});
