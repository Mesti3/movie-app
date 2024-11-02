import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { GridComponent } from '../../components/grid/grid.component';
import { Observable, take, tap } from 'rxjs';
import { Movie } from '../../store/movies/movie.model';
import { selectAllMovies,  selectMoviesError } from '../../store/movies/movie.selector';
import { select, Store } from '@ngrx/store';
import * as MovieActions from '../../store/movies/movie.action';
import { PopupService } from '../../services/popup.service';
import { PopupComponent } from '../../components/pop-up/pop-up.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [GridComponent,PopupComponent,CommonModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesComponent {
  protected movies$!: Observable<Movie[]| []>;
  protected loading$!: Observable<boolean>;
  protected error$!: Observable<string | null>;
  protected currentPage$!: Observable<number>;

  protected popupData$: Observable<{  visible: boolean,query?: string} | null>;

  @ViewChild('scrollContainer', { static: true }) scrollContainer!: ElementRef;

  constructor(private store: Store,private popupService: PopupService) {
  }

  ngOnInit(): void {
    this.store.dispatch(MovieActions.getMovie({page: 1}));
    this.movies$ = this.store.pipe(select(selectAllMovies));
    this.error$ = this.store.pipe(select(selectMoviesError));
  //  this.currentPage$ = this.store.pipe(select(selectCurrentPage));
  this.popupData$ = this.popupService.popupData$;
  }

  handleScroll(event: {collectionName: string, page: number}){
    this.store.dispatch(MovieActions.getMovie({page: event.page}));
  }

  protected closePopup() {
    this.popupService.closePopup();
  }
  

}
