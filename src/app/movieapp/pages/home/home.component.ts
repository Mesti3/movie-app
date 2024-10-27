import { ChangeDetectionStrategy, Component, ElementRef } from '@angular/core';
import {ListComponent} from '../../components/list/list.component';
import {ListItemComponent} from '../../components/list-item/list-item.component';
import { Observable } from 'rxjs';
import { Movie } from '../../store/movies/movie.model';
import { selectAllMovies, selectMoviesError, selectPopularMovies } from '../../store/movies/movie.selector';
import { select, Store } from '@ngrx/store';
import * as MovieActions from '../../store/movies/movie.action';
import * as TVShowAction from '../../store/tv-shows/tv-show.action';
import { TVShow } from '../../store/tv-shows/tv-show.model';
import { selectAllTVShows, selectPopularTVShows } from '../../store/tv-shows/tv-show.selector';
import { PopupComponent } from '../../components/pop-up/pop-up.component';
import { PopupService } from '../../services/popup.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ListComponent,ListItemComponent,PopupComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  protected movies$!: Observable<Movie[]>;
  protected error$!: Observable<string | null>;
  protected  tvshows$!: Observable<TVShow[]>;
  protected  popularMovies$!: Observable<Movie[]>;
  protected  popularTVShows$!: Observable<TVShow[]>;

  protected popupData$: Observable<{  visible: boolean,query?: string}>;

  constructor(private store: Store,private popupService: PopupService) {
    this.popupData$ = this.popupService.popupData$;
  }

  ngOnInit(): void {
    this.store.dispatch(MovieActions.getMovie({page: 1}));
    this.store.dispatch(TVShowAction.getTVShow({page: 1}));
    this.store.dispatch(MovieActions.getPopularMovie({page: 1}))
    this.store.dispatch(TVShowAction.getPopularTVShow({page: 1}))
    this.movies$ = this.store.pipe(select(selectAllMovies));
    this.error$ = this.store.pipe(select(selectMoviesError));
    this.tvshows$ = this.store.pipe(select(selectAllTVShows));
    this.popularMovies$ = this.store.pipe(select(selectPopularMovies));
    this.popularTVShows$ = this.store.pipe(select(selectPopularTVShows));
  }

  protected handleLoadNextPage(event: {collectionName: string, page: number}){
    
    switch(event.collectionName) {
      case "Movies":
        this.store.dispatch(MovieActions.getMovie({page: event.page}))
        break;
      case "TV-shows":
        this.store.dispatch(TVShowAction.getTVShow({page: event.page}))
        break;
      case "Popular movies":
        this.store.dispatch(MovieActions.getPopularMovie({page: event.page}))
      break;
      case "Popular TV-shows":
        this.store.dispatch(TVShowAction.getPopularTVShow({page: event.page}))
      break;
    }
  }

  closePopup() {
    this.popupService.closePopup();
  }
  
}
