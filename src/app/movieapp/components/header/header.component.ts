import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { debounceTime, filter, Subject } from 'rxjs';
import * as SearchAction from '../../store/search/search.action';
import { PopupService } from '../../services/popup.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnDestroy {
  private searchTerms = new Subject<string>();

  constructor(private store: Store,private popupService: PopupService) {}

  ngOnInit(): void {
    this.searchTerms.pipe(
      debounceTime(1000),
      filter((term) => term.length >= 3) 
    ).subscribe((query) => {
      this.store.dispatch(SearchAction.getSearch({page: 1, query }));
    });
  }

  onSearchInput(event: Event): void {
    const query = (event.target as HTMLInputElement).value;
    this.searchTerms.next(query);
    this.openPopup(query);
  }

  openPopup(query: string) {
    this.popupService.openPopup(true, query); 
  }

  ngOnDestroy(): void {
    this.searchTerms.unsubscribe();
  }
}
