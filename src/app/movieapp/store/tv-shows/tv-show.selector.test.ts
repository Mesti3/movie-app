import { selectTVShowState, selectAllTVShows, selectTVShowsError, selectPopularTVShows } from './tv-show.selector';
import { TVShowState } from './tv-show.reducer';

describe('TVShow Selectors', () => {
  const initialState: TVShowState = {
    tvshows: [
      { id: 1, title: 'Show 1', overview: 'Overview 1', release_date: '2023-01-01', vote_average: 8, vote_count: 100, poster_path: '/path1.jpg', backdrop_path: '/backdrop1.jpg', genre_ids: [1], popularity: 10, adult: false, original_language: 'en', original_title: 'Original Show 1', video: false },
      { id: 2, title: 'Show 2', overview: 'Overview 2', release_date: '2023-02-01', vote_average: 7, vote_count: 80, poster_path: '/path2.jpg', backdrop_path: '/backdrop2.jpg', genre_ids: [2], popularity: 20, adult: false, original_language: 'en', original_title: 'Original Show 2', video: false }
    ],
    popularTVShows: [],
    error: null,
    loading: false,
    currentPage: 1,
  };

  it('should select the TVShow state', () => {
    const result = selectTVShowState.projector(initialState);
    expect(result).toEqual(initialState);
  });

  it('should select all TV shows', () => {
    const result = selectAllTVShows.projector(initialState);
    expect(result).toEqual(initialState.tvshows);
  });

  it('should select TV shows error', () => {
    const result = selectTVShowsError.projector(initialState);
    expect(result).toBe(initialState.error);
  });

  it('should select popular TV shows', () => {
    const result = selectPopularTVShows.projector(initialState);
    expect(result).toEqual(initialState.tvshows); 
  });
});
