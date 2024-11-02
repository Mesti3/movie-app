import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { PopupService } from '../../services/popup.service';
import { Subject } from 'rxjs';

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

  describe('searchTerms subscription', () => {

    it('should not dispatch search action for query less than 3 characters', (done) => {
      jest.spyOn(store, 'dispatch');
      component.ngOnInit();

      searchTermsSubject.next('ab');

        expect(store.dispatch).not.toHaveBeenCalled();
        done();
    });
  });

});
