import * as TVShowActions from './tv-show.action';
import { TVShow } from './tv-show.model';

describe('TVShow Actions', () => {
  
  it('should create a getTVShow action', () => {
    const page = 1;
    const action = TVShowActions.getTVShow({ page });
    
    expect(action.type).toBe(TVShowActions.TVShowActionTypes.getTVShow);
    expect(action.page).toBe(page);
  });

  it('should create a loadTVShowsSuccess action', () => {
    const tvshows: TVShow[] = [
      {
          id: 1, title: 'TV Show 1', overview: 'Overview 1', release_date: '2024-01-01', vote_average: 7.5, vote_count: 100, poster_path: '/path1.jpg', backdrop_path: '/backdrop1.jpg', genre_ids: [1, 2], popularity: 10, original_language: 'en', original_title: 'Original Title 1', video: false,
          adult: false
      },
      {
          id: 2, title: 'TV Show 2', overview: 'Overview 2', release_date: '2024-01-02', vote_average: 8.0, vote_count: 200, poster_path: '/path2.jpg', backdrop_path: '/backdrop2.jpg', genre_ids: [2, 3], popularity: 20, original_language: 'en', original_title: 'Original Title 2', video: false,
          adult: false
      },
    ];
    const action = TVShowActions.loadTVShowsSuccess({ tvshows });
    
    expect(action.type).toBe(TVShowActions.TVShowActionTypes.LoadTVShow);
    expect(action.tvshows).toEqual(tvshows);
  });

  it('should create a loadTVShowsFailure action', () => {
    const error = 'Failed to load TV shows';
    const action = TVShowActions.loadTVShowsFailure({ error });
    
    expect(action.type).toBe(TVShowActions.TVShowActionTypes.Error);
    expect(action.error).toBe(error);
  });

  it('should create a getPopularTVShow action', () => {
    const page = 2;
    const action = TVShowActions.getPopularTVShow({ page });
    
    expect(action.type).toBe(TVShowActions.TVShowActionTypes.getPopularTVShow);
    expect(action.page).toBe(page);
  });

  it('should create a loadPopularTVShow action', () => {
    const tvshows: TVShow[] = [
      {
          id: 1, title: 'Popular TV Show 1', overview: 'Overview 1', release_date: '2024-01-01', vote_average: 7.5, vote_count: 100, poster_path: '/path1.jpg', backdrop_path: '/backdrop1.jpg', genre_ids: [1, 2], popularity: 10, original_language: 'en', original_title: 'Original Title 1', video: false,
          adult: false
      },
      {
          id: 2, title: 'Popular TV Show 2', overview: 'Overview 2', release_date: '2024-01-02', vote_average: 8.0, vote_count: 200, poster_path: '/path2.jpg', backdrop_path: '/backdrop2.jpg', genre_ids: [2, 3], popularity: 20, original_language: 'en', original_title: 'Original Title 2', video: false,
          adult: false
      },
    ];
    const action = TVShowActions.loadPopularTVShow({ tvshow: tvshows });
    
    expect(action.type).toBe(TVShowActions.TVShowActionTypes.PopularTVShow);
    expect(action.tvshow).toEqual(tvshows);
  });

});
