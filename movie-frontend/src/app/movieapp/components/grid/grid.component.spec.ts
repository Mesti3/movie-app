import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GridComponent } from './grid.component';
import { of, Subscription } from 'rxjs';
import { ComponentRef, ElementRef } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('GridComponent', () => {
  let component: GridComponent;
  let componentRef: ComponentRef<GridComponent>;
  let fixture: ComponentFixture<GridComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [GridComponent,BrowserAnimationsModule,NoopAnimationsModule],
      providers: [
        { provide: ElementRef, useValue: { nativeElement: document.createElement('div') } }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;

  
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

    // Mock the inputs
    componentRef.setInput('collectionName$','Movies');
    componentRef.setInput('data$', of(mockData)); 
    componentRef.setInput('error$', of(null)); 
    component.loadNextPage = { emit: jest.fn() } as any;
    component.viewChildGrid = new ElementRef(document.createElement('div'));

    const mockGridElement = document.createElement('div');
    mockGridElement.classList.add('grid-resize');
    component.viewChildGrid.nativeElement.appendChild(mockGridElement);

    fixture.detectChanges();

    component.ngAfterViewInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngAfterViewInit', () => {


    it('should initialize scroll subscription and call onScroll', () => {

      component.ngAfterViewInit();

      expect(component['scrollSubscription']).toBeInstanceOf(Subscription);
    });
  });

  describe('onScroll', () => {
    beforeEach(() => {
      jest.spyOn(component.loadNextPage, 'emit');
    });

    it('should emit loadNextPage event when near bottom of page', () => {
      Object.defineProperty(window, 'scrollY', { value: 100, writable: true });
      Object.defineProperty(window, 'innerHeight', { value: 800, writable: true });
      Object.defineProperty(document.body, 'scrollHeight', { value: 2000, writable: true });

      (component as any).onScroll();

      expect(component.loadNextPage.emit).toHaveBeenCalledWith({
        collectionName: component.collectionName$(),
        page: 2,
      });
    });

    it('should not emit loadNextPage event when not near bottom', () => {
      Object.defineProperty(window, 'scrollY', { value: 100, writable: true });
      Object.defineProperty(window, 'innerHeight', { value: 800, writable: true });
      Object.defineProperty(document.body, 'scrollHeight', { value: 2000, writable: true });

      (component as any).onScroll();

      expect(component.loadNextPage.emit).not.toHaveBeenCalled();
    });
  });

  describe('ngOnDestroy', () => {
    it('should unsubscribe from scrollSubscription', () => {
      component['scrollSubscription'] = new Subscription();
      const unsubscribeSpy = jest.spyOn(component['scrollSubscription'], 'unsubscribe');

      component.ngOnDestroy()

      expect(unsubscribeSpy).toHaveBeenCalled();
    });
  });
});
