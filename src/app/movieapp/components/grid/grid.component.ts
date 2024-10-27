import { ChangeDetectionStrategy, Component, ElementRef, input, output, ViewChild } from '@angular/core';
import { ListItemComponent } from '../list-item/list-item.component';
import { fromEvent, Observable, Subscription, throttleTime } from 'rxjs';
import { Movie } from '../../store/movies/movie.model';
import { CommonModule } from '@angular/common';
import { TVShow } from '../../store/tv-shows/tv-show.model';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [CommonModule, ListItemComponent],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridComponent {
   data$ = input.required<Observable<Movie[] | TVShow[] | []>>();
   error$ = input.required<Observable<string | null>>();
  private currentPage: number = 1;
  collectionName$ = input.required<string>();
  loadNextPage = output<{collectionName: string, page: number}>();
  private scrollSubscription!: Subscription;

  @ViewChild('grid') viewChildGrid! : ElementRef;

  constructor(private elRef: ElementRef){}
  
  ngAfterViewInit(): void {
    if(this.viewChildGrid && this.viewChildGrid.nativeElement){
    const gridElement = this.viewChildGrid.nativeElement.querySelector('.grid-resize') as HTMLElement;

    this.scrollSubscription = fromEvent(gridElement, 'scroll')
      .pipe(throttleTime(200)) // Throttle to avoid frequent events
      .subscribe(() => this.onScroll());
      
      this.onScroll();
    }
  }

  private onScroll(): void {
    const scrollPosition = window.scrollY + window.innerHeight;
    const maxScrollPosition = document.body.scrollHeight;

    if (scrollPosition >= maxScrollPosition * 0.99) {
      this.loadNextPage.emit({
        collectionName: this.collectionName$(),
        page: ++this.currentPage,
      });
    }
  }

  ngOnDestroy(): void {
    if (this.scrollSubscription) {
      this.scrollSubscription.unsubscribe();
    }
  }
}
