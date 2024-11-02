import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { TvShowComponent } from './tv-show.component';
import { GridComponent } from '../../components/grid/grid.component';
import { Observable, of } from 'rxjs';
import * as TVShowAction from '../../store/tv-shows/tv-show.action';
import { Movie } from '../../store/movies/movie.model';
import { selectAllTVShows, selectTVShowsError } from '../../store/tv-shows/tv-show.selector';

describe('TvShowComponent', () => {
  let component: TvShowComponent;
  let fixture: ComponentFixture<TvShowComponent>;
  let store: jest.Mocked<Store>;

  beforeEach(() => {
    const storeSpy = {
      dispatch: jest.fn(),
      select: jest.fn(),
    };

    TestBed.configureTestingModule({
      imports: [TvShowComponent, GridComponent],
      providers: [
        { provide: Store, useValue: storeSpy }
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TvShowComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store) as jest.Mocked<Store>;
  });

  it('should dispatch getTVShow action on init', () => {
    component.ngOnInit();
    expect(store.dispatch).toHaveBeenCalledWith(TVShowAction.getTVShow({ page: 1 }));
  });

  it('should set tvshow$ from store selector', (done) => {
    const testTVShows: Movie[] = [{
      id: 1,
      title: 'Test TV Show',
      overview: 'Overview of Test TV Show',
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

    store.select.mockImplementation((selector) => {
      if (selector === selectAllTVShows) {
        return of(testTVShows);
      }
      return of(null);
    });

    component.ngOnInit();

    component["tvshow$"].subscribe(tvshows => {
      expect(tvshows).toEqual(testTVShows);
      done(); // Signal completion of async test
    });
  });

  it('should set error$ from store selector', (done) => {
    const testError = 'An error occurred';

    store.select.mockImplementation((selector) => {
      if (selector === selectTVShowsError) {
        return of(testError);
      }
      return of(null);
    });

    component.ngOnInit();

    component["error$"].subscribe(error => {
      expect(error).toEqual(testError);
      done(); // Signal completion of async test
    });
  });

  it('should dispatch getTVShow action on handleScroll', () => {
    const event = { collectionName: 'TV Shows', page: 2 };
    
    component["handleScroll"](event);

    expect(store.dispatch).toHaveBeenCalledWith(TVShowAction.getTVShow({ page: event.page }));
  });
});
