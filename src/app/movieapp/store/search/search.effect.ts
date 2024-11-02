import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SearchService } from '../../services/search.service';
import { SearchActionTypes } from './search.action';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SearchEffects {
  loadSearchs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SearchActionTypes.getSearch),
      mergeMap((action: {query: string, page: number}) => this.loadAllSearchs(action.query, action.page))
    )
  );

  constructor(private actions$: Actions, private SearchService: SearchService) {}

  private loadAllSearchs(query: string, page: number) {
    return this.SearchService.getSearch(query, page).pipe(
      map((search) => ({
        type: SearchActionTypes.SearchSuccess,
        search: search.results,
      })),
      catchError((error) =>
        of({ type: SearchActionTypes.Error, message: error })
      )
    );
  }
}
