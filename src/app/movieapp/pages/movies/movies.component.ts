import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { GridComponent } from '../../components/grid/grid.component';
import { Observable, take, tap } from 'rxjs';
import { Movie } from '../../store/movies/movie.model';
import { selectAllMovies,  selectMoviesError } from '../../store/movies/movie.selector';
import { select, Store } from '@ngrx/store';
import * as MovieActions from '../../store/movies/movie.action';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [GridComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesComponent {
  protected movies$!: Observable<Movie[]| []>;
  protected loading$!: Observable<boolean>;
  protected error$!: Observable<string | null>;
  protected currentPage$!: Observable<number>;

  @ViewChild('scrollContainer', { static: true }) scrollContainer!: ElementRef;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(MovieActions.getMovie({page: 1}));
    this.movies$ = this.store.pipe(select(selectAllMovies));
    this.error$ = this.store.pipe(select(selectMoviesError));
  //  this.currentPage$ = this.store.pipe(select(selectCurrentPage));
  }

  handleScroll(event: {collectionName: string, page: number}){
    this.store.dispatch(MovieActions.getMovie({page: event.page}));
  }


}
