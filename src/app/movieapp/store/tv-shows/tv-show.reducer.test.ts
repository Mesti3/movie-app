import { TVShowState, initialState, TVShowReducer } from './tv-show.reducer';
import {
  loadTVShowsSuccess,
  loadTVShowsFailure,
  loadPopularTVShow
} from './tv-show.action';
import { TVShow } from './tv-show.model';

describe('TVShowReducer', () => {
  it('should return the default state', () => {
    const action = {} as any; // No action dispatched
    const state = TVShowReducer(undefined, action);
    expect(state).toBe(initialState);
  });

  it('should handle loadTVShowsSuccess', () => {
    const previousState: TVShowState = {
      tvshows: [],
      popularTVShows: [],
      error: null,
      loading: false,
      currentPage: 1,
    };

    const tvshows: TVShow[] = [
      { id: 1, title: 'Show 1', overview: 'Overview 1', release_date: '2023-01-01', vote_average: 8, vote_count: 100, poster_path: '/path1.jpg', backdrop_path: '/backdrop1.jpg', genre_ids: [1], popularity: 10, adult: false, original_language: 'en', original_title: 'Original Show 1', video: false },
      { id: 2, title: 'Show 2', overview: 'Overview 2', release_date: '2023-02-01', vote_average: 7, vote_count: 80, poster_path: '/path2.jpg', backdrop_path: '/backdrop2.jpg', genre_ids: [2], popularity: 20, adult: false, original_language: 'en', original_title: 'Original Show 2', video: false }
    ];

    const action = loadTVShowsSuccess({ tvshows });

    const newState = TVShowReducer(previousState, action);

    expect(newState.tvshows.length).toBe(2);
    expect(newState.tvshows).toEqual(tvshows); 
  });

  it('should handle loadPopularTVShow', () => {
    const previousState: TVShowState = {
      tvshows: [],
      popularTVShows: [],
      error: null,
      loading: false,
      currentPage: 1,
    };

    const popularTVShow: TVShow = 
        { id: 3, title: 'Popular Show 1', overview: 'Overview of popular show 1', release_date: '2023-03-01',
             vote_average: 9, vote_count: 200, poster_path: '/popular1.jpg', backdrop_path: '/popularbackdrop1.jpg', 
             genre_ids: [3], popularity: 30, adult: false, original_language: 'en', original_title: 'Original Popular Show 1', video: false };

    const action = loadPopularTVShow({ tvshow: [popularTVShow] });

    const newState = TVShowReducer(previousState, action);

    expect(newState.popularTVShows.length).toBe(1); 
    expect(newState.popularTVShows[0]).toEqual(popularTVShow); 
  });

  it('should handle loadTVShowsFailure', () => {
    const previousState: TVShowState = {
      tvshows: [],
      popularTVShows: [],
      error: null,
      loading: false,
      currentPage: 1,
    };

    const error = 'Failed to load TV shows';
    const action = loadTVShowsFailure({ error });

    const newState = TVShowReducer(previousState, action);

    expect(newState.error).toBe(error);
  });
});
