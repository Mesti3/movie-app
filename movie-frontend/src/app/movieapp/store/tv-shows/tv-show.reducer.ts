import { createReducer, on } from '@ngrx/store';
import { loadTVShowsSuccess, loadTVShowsFailure, loadPopularTVShow } from './tv-show.action';
import { TVShow } from './tv-show.model';

export interface TVShowState {
  tvshows: TVShow[];
  popularTVShows: TVShow[];
  error: string | null;
  loading: boolean;
  currentPage: number;
}

export const initialState: TVShowState = {
  tvshows: [],
  popularTVShows: [],
  error: null,
  loading: false,
  currentPage: 1,
};

export const TVShowReducer = createReducer(
  initialState,
  on(loadTVShowsSuccess, (state, action) => ({
    ...state,
    tvshows: state.tvshows.concat(action.tvshows),
  })),
  on(loadPopularTVShow, (state, action) => ({
    ...state,
    popularTVShows: state.popularTVShows.concat(action.tvshow),
  })),
  on(loadTVShowsFailure, (state, action) => ({ ...state, error: action.error }))
);
