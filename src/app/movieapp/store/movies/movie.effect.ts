import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MovieService } from '../../services/movie.service';
import { loadMoviesSuccess, MovieActionTypes } from './movie.action';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MovieEffects {
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActionTypes.getMovie),
      mergeMap((action:{page:number, type:string}
      ) => this.loadAllMovies(action.page))
    )
  );

  loadPopularMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActionTypes.getPopularMovie),
      mergeMap((action:{page:number, type:string}
      ) => this.loadPopularMovies(action.page))
    )
  );

  constructor(private actions$: Actions, private movieService: MovieService) {}

  private loadAllMovies(page:number) {
    return this.movieService.getMovies(page).pipe(
      map((movies) => ({
        type: MovieActionTypes.LoadMovie,
        movies: movies.results,
      })),
      catchError((error) =>
        of({ type: MovieActionTypes.Error, message: error })
      )
    );
  }

  private loadPopularMovies(page:number) {
    return this.movieService.getPopularMovies(page).pipe(
      map((movies) => ({
        type: MovieActionTypes.Popular,
        movies: movies.results,
      })),
      catchError((error) =>
        of({ type: MovieActionTypes.Error, message: error })
      )
    );
  }
}
