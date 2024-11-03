import { ChangeDetectionStrategy, Component, inject, ViewContainerRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { debounceTime, filter } from 'rxjs';
import * as SearchAction from '../../store/search/search.action';
import { PopupService } from '../../services/popup.service';
import {searchValidator} from '../../validators/search.validator';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
 // protected drp = inject('container')
  protected searchForm = new FormGroup({
    search: new FormControl('', [Validators.required, searchValidator])
  })

  constructor(private store: Store,private popupService: PopupService) {}

  ngOnInit(): void {
      this.searchForm.valueChanges.pipe(
      debounceTime(1000),
      filter(item => item.search.length >= 3 )
    ).subscribe(query => {
      this.openPopup(query.search)
      this.store.dispatch(SearchAction.getSearch({page: 1, query: query.search}))
    })
  }

  openPopup(query: string) {
    this.popupService.openPopup(true, query); 
  }

}
