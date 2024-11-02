import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PopupComponent } from './pop-up.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import * as SearchAction from '../../store/search/search.action';
import { ComponentRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';

describe('PopupComponent', () => {
  let component: PopupComponent;
  let componentRef: ComponentRef<PopupComponent>;
  let fixture: ComponentFixture<PopupComponent>;
  let store: Store;
  
  const mockQuery = 'test query';
  const initialState = {
    search: { entities: [], loading: false, error: null }
  };

  const storeSpy = {
    dispatch: jest.fn(),
    select: jest.fn(),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupComponent,CommonModule],
      providers: [
        provideMockStore({ initialState }),
        { provide: Store, useValue: storeSpy }
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PopupComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    componentRef = fixture.componentRef;
    store = TestBed.inject(Store);

    componentRef.setInput('query',mockQuery);
    jest.spyOn(store, 'dispatch').mockImplementation(() => {});
  });

  it('should create the PopupComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should emit close event when closePopup is called', () => {
    jest.spyOn(component.close, 'emit');
    component.closePopup();
    expect(component.close.emit).toHaveBeenCalled();
  });
  afterEach(() => {
    jest.clearAllMocks(); // Clear mocks after each test
  });
});
