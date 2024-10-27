import { createAction, props } from '@ngrx/store';
import { TVShow } from './tv-show.model';

export const messagesKey = '[TVShow]';

export enum TVShowActionTypes {
  getTVShow = `${messagesKey} Get TVShows` ,
  LoadTVShow = `${messagesKey} Load TVShows`,
  Error = `${messagesKey} Load TVShows Failure`,
  getPopularTVShow = `${messagesKey} Get Popular Movies` ,
  PopularTVShow = `${messagesKey} Popular Movies`
}

export const getTVShow = createAction(
  TVShowActionTypes.getTVShow,
  props<{ page: number }>()
);

export const loadTVShowsSuccess = createAction(
  TVShowActionTypes.LoadTVShow,
  props<{ tvshows: TVShow[] }>()
);
export const loadTVShowsFailure = createAction(
  TVShowActionTypes.Error,
  props<{ error: string }>()
);

export const getPopularTVShow = createAction(
  TVShowActionTypes.getPopularTVShow,
  props<{page: number}>()
)

export const loadPopularTVShow = createAction(
  TVShowActionTypes.PopularTVShow,
  props<{tvshow: TVShow[]}>()
)