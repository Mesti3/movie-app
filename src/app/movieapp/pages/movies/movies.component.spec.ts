import { ComponentFixture, TestBed } from '@angular/core/testing';
import { select, Store } from '@ngrx/store';
import { MoviesComponent } from './movies.component';
import { GridComponent } from '../../components/grid/grid.component';
import { Observable, of } from 'rxjs';
import * as MovieActions from '../../store/movies/movie.action';
import { Movie } from '../../store/movies/movie.model';
import { selectAllMovies, selectMoviesError } from '../../store/movies/movie.selector';
import { CommonModule } from '@angular/common';

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;
  let store: jest.Mocked<Store>;

  beforeEach(() => {
    const storeSpy = {
      dispatch: jest.fn(),
      pipe: jest.fn(),
      select: jest.fn(),
    };

    TestBed.configureTestingModule({
      imports: [MoviesComponent, GridComponent,CommonModule],
      providers: [
        { provide: Store, useValue: storeSpy }
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store) as jest.Mocked<Store>;
  });

  it('should dispatch getMovie action on init', () => {
    component.ngOnInit();
    expect(store.dispatch).toHaveBeenCalledWith(MovieActions.getMovie({ page: 1 }));
  });

  it('should set movies$ from store selector', (done) => {
    const testMovies: Movie[] = [{
      id: 1,
      title: 'Test Movie',
      overview: 'Overview of Test Movie',
      release_date: '2024-01-01',
      vote_average: 8.5,
      vote_count: 100,
      poster_path: '/path/to/poster.jpg',
      backdrop_path: '/path/to/backdrop.jpg',
      genre_ids: [1, 2],
      popularity: 10,
      adult: false,
      original_language: 'en',
      original_title: 'Original Title',
      video: false,
    }];

    store.pipe.mockReturnValue(of(testMovies));
    
    component["movies$"] = store.pipe(select(selectAllMovies));

    // Call ngOnInit to trigger the initialization logic
    component.ngOnInit();
    
    // Check if movies$ emits the correct value
    component["movies$"].subscribe(movies => {
      expect(movies).toEqual(testMovies);
      done(); // Signal completion of async test
    });
  });

  it('should set error$ from store selector', (done) => {
    const testError = 'An error occurred';
    
    store.pipe.mockReturnValue(of(testError));

    component["error$"] = store.pipe(select(selectMoviesError));

    // Call ngOnInit to trigger the initialization logic
    component.ngOnInit();

    // Check if error$ emits the correct value
    component["error$"].subscribe(error => {
      expect(error).toEqual(testError);
      done(); // Signal completion of async test
    });
  });

  it('should dispatch getMovie action on handleScroll', () => {
    const event = { collectionName: 'Movies', page: 2 };
    
    component.handleScroll(event);

    expect(store.dispatch).toHaveBeenCalledWith(MovieActions.getMovie({ page: event.page }));
  });
});
