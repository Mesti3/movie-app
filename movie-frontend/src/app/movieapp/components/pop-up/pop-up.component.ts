import { Component, input, output } from '@angular/core';
import * as SearchAction from '../../store/search/search.action';
import { select, Store } from '@ngrx/store';
import { selectAllSearch, selectSearchsError } from '../../store/search/search.selector';
import { Observable } from 'rxjs';
import { Search } from '../../store/search/search.model';
import { GridComponent } from '../grid/grid.component';
@Component({
  selector: 'app-pop-up',
  standalone: true,
  imports: [GridComponent],
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.scss'
})
export class PopupComponent {
  protected collection$!: Observable<Search[]>;
  protected error$!: Observable<string | null>;

  close = output<void>();
  query = input<string>();

   
  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(SearchAction.getSearch({query: this.query(),page: 1}));
    this.collection$ = this.store.pipe(select(selectAllSearch));
    this.error$ = this.store.pipe(select(selectSearchsError));
  }

   handleScroll(event: {collectionName: string, page: number}){
    this.store.dispatch(SearchAction.getSearch({query: this.query(),page: event.page}));
  }

  closePopup() {
    this.close.emit(); 
  }
}