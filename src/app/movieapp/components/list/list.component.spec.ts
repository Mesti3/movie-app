import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListComponent } from './list.component';
import { ComponentRef, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

describe('ListComponent', () => {
  let component: ListComponent;
  let componentRef: ComponentRef<ListComponent>;
  let fixture: ComponentFixture<ListComponent>;
  let mockElementRef: ElementRef;

  type MockStore = {
    select: jest.Mock; // Mock select method
  };

  let store: MockStore;

  beforeEach(() => {
    mockElementRef = {
      nativeElement: document.createElement('div')
    };

    store = {
      select: jest.fn(), 
    }as unknown as MockStore;;

     TestBed.configureTestingModule({
      imports: [ListComponent],
      providers: [{ provide: ElementRef, useValue: mockElementRef , CommonModule}, { provide: Store, useValue: store }]
    }).compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;

    store.select.mockReturnValue(of(5));

    const mockData = [{
      id: 1, title: 'Test Movie',
      overview: '',
      release_date: '',
      vote_average: 0,
      vote_count: 0,
      poster_path: '',
      backdrop_path: '',
      genre_ids: [],
      popularity: 0,
      adult: false,
      original_language: '',
      original_title: '',
      video: false
  }];

    componentRef.setInput('data$', of(mockData));
    componentRef.setInput('error$', of(null));
    componentRef.setInput('collectionName', 'Movies');

    fixture.detectChanges();
  });

  it('should create the ListComponent', () => {
    expect(component).toBeTruthy();
  });

  describe('Dragging Events', () => {
    beforeEach(() => {
      component['contentElement'] = {
        scrollLeft: 0,
        clientWidth: 500,
        scrollWidth: 1000,
        addEventListener: jest.fn()
      } as unknown as HTMLElement;
    });

    it('should initiate dragging on mousedown', () => {
      const event = new MouseEvent('mousedown', { clientX: 100 });
      component['onMouseDown'](event);

      expect(component['isDragging']).toBe(true);
      expect(component['startX']).toBe(100);
      expect(component['scrollX']).toBe(0);
    });

    it('should scroll contentElement and emit loadNextPage when dragging and near end', () => {
      const emitSpy = jest.spyOn(component.loadNextPage, 'emit');
      component['isDragging'] = true;
      component['startX'] = 100;
      component['scrollX'] = 0;
      component['currentPage'] = 1;

      const event = new MouseEvent('mousemove', { clientX: 200 });
      component['onMouseMove'](event);

      expect(component['contentElement'].scrollLeft).toBe(-100);
    });

    it('should end dragging on mouseup', () => {
      component['onMouseUp']();
      expect(component['isDragging']).toBe(false);
    });
  });

  afterEach(() => {
    fixture.destroy();
  });
});
