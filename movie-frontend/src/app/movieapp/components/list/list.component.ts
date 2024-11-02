import { Component, ElementRef, OnInit, AfterViewInit, input, ChangeDetectionStrategy, output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Movie } from '../../store/movies/movie.model';
import { CommonModule } from '@angular/common';
import {ListItemComponent} from '../list-item/list-item.component';
import { TVShow } from '../../store/tv-shows/tv-show.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule,ListItemComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements AfterViewInit {
  private isDragging = false;
  private startX = 0;
  private scrollX = 0;
   private contentElement: HTMLElement;
   private currentPage = 1;

   data$ = input.required<Observable<Movie[] | TVShow[]>>();
   error$ = input.required<Observable<string | null>>();
   collectionName = input.required<string>();

   loadNextPage = output<{collectionName: string, page: number}>();
  

  constructor(private elRef: ElementRef) {
  }

  ngAfterViewInit(): void {
    this.contentElement = this.elRef.nativeElement.querySelector('.list-scroll');
    this.contentElement.addEventListener('mousedown', this.onMouseDown.bind(this));
    this.contentElement.addEventListener('mousemove', this.onMouseMove.bind(this));
    this.contentElement.addEventListener('mouseup', this.onMouseUp.bind(this));
  }

  private onMouseDown(event: MouseEvent) {
    this.isDragging = true;
    this.startX = event.clientX;
    this.scrollX = this.contentElement.scrollLeft;
  }

  private onMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      const dx = event.clientX - this.startX;
      this.contentElement.scrollLeft = this.scrollX - dx;

      const scrollPosition = this.contentElement.scrollLeft + this.contentElement.clientWidth;
      const maxScrollPosition = this.contentElement.scrollWidth;
      if (scrollPosition >= maxScrollPosition * 0.6) {
        this.loadNextPage.emit({collectionName: this.collectionName(), page: ++this.currentPage});
      }
    }
  }

  private onMouseUp() {
    this.isDragging = false;
  }
    
}
