import { Component, ElementRef, ViewChild, AfterViewInit, Renderer2, ChangeDetectionStrategy } from '@angular/core';
import { GridComponent } from '../../components/grid/grid.component';
import { Observable, take, tap } from 'rxjs';
import { Movie } from '../../store/movies/movie.model';
import { Store } from '@ngrx/store';
import * as TVShowAction from '../../store/tv-shows/tv-show.action';
import { selectAllTVShows, selectTVShowsError } from '../../store/tv-shows/tv-show.selector';
import { PopupService } from '../../services/popup.service';
import { PopupComponent } from '../../components/pop-up/pop-up.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tv-show',
  standalone: true,
  imports: [GridComponent,PopupComponent,CommonModule],
  templateUrl: './tv-show.component.html',
  styleUrl: './tv-show.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TvShowComponent{
  protected tvshow$: Observable<Movie[]>;
  protected error$: Observable<string | null>;

  protected popupData$: Observable<{  visible: boolean,query?: string} | null>;

  constructor(private store: Store,private renderer: Renderer2,private popupService: PopupService) {}

  ngOnInit(): void {
    this.store.dispatch(TVShowAction.getTVShow({page: 1}));
    this.tvshow$ = this.store.select(selectAllTVShows);
    this.error$ = this.store.select(selectTVShowsError);
    this.popupData$ = this.popupService.popupData$;
  }

  protected handleScroll(event: {collectionName: string, page: number}){
    this.store.dispatch(TVShowAction.getTVShow({page: event.page}));
  }

  protected closePopup() {
    this.popupService.closePopup();
  }
  
}