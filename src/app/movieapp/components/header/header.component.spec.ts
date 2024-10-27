import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { PopupService } from '../../services/popup.service';
import { Subject } from 'rxjs';
import * as SearchAction from '../../store/search/search.action';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let store: MockStore;
  let popupService: jest.Mocked<PopupService>;
  let searchTermsSubject: Subject<string>;

  beforeEach(async () => {
    const popupServiceSpy = {
      openPopup: jest.fn(),
    };

    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [
        provideMockStore(),
        { provide: PopupService, useValue: popupServiceSpy }
      ]
    }).compileComponents();

    store = TestBed.inject(MockStore);
    popupService = TestBed.inject(PopupService) as jest.Mocked<PopupService>;
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;

    searchTermsSubject = component['searchTerms'];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onSearchInput', () => {
    it('should call next on searchTerms with input value and open popup', () => {
      const query = 'se';
      const event = { target: { value: query } } as unknown as Event;

      component.onSearchInput(event);

      expect(searchTermsSubject.observers.length).toBe(0);
      expect(popupService.openPopup).toHaveBeenCalledWith(true, query);
    });
  });

  describe('searchTerms subscription', () => {

    it('should not dispatch search action for query less than 3 characters', (done) => {
      jest.spyOn(store, 'dispatch');
      component.ngOnInit();

      searchTermsSubject.next('ab');

        expect(store.dispatch).not.toHaveBeenCalled();
        done();
    });
  });

  it('should unsubscribe from searchTerms on component destroy', () => {
    const unsubscribeSpy = jest.spyOn(searchTermsSubject, 'unsubscribe');
    component.ngOnDestroy();
    expect(unsubscribeSpy).toHaveBeenCalled();
  });
});
