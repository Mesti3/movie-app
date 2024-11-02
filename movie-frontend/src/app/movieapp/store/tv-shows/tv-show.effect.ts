import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TVShowService } from '../../services/tv-show.service';
import {  TVShowActionTypes } from './tv-show.action';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TVShowEffects {
  loadTVShows$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TVShowActionTypes.getTVShow),
      mergeMap((action: {type: string, page: number}) => this.loadAllTVShows(action.page))
    )
  );

  loadPopularTVShows$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TVShowActionTypes.getPopularTVShow),
      mergeMap((action: {type: string, page: number}) => this.loadPopularTVShows(action.page))
    )
  );

  constructor(private actions$: Actions, private TVShowService: TVShowService) {}

  private loadAllTVShows(page:number) {
    return this.TVShowService.getTVShow(page).pipe(
      map((tvshows) => ({
        type: TVShowActionTypes.LoadTVShow,
        tvshows: tvshows.results,
      })),
      catchError((error) =>
        of({ type: TVShowActionTypes.Error, message: error })
      )
    );
  }

  private loadPopularTVShows(page:number) {
    return this.TVShowService.getPopularTVShow(page).pipe(
      map((tvshows) => ({
        type: TVShowActionTypes.PopularTVShow,
        tvshows: tvshows.results,
      })),
      catchError((error) =>
        of({ type: TVShowActionTypes.Error, message: error })
      )
    );
  }
}
