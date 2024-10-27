import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { PopupService } from '../../services/popup.service';
import * as MovieActions from '../../store/movies/movie.action';
import * as TVShowActions from '../../store/tv-shows/tv-show.action';
import { selectAllMovies, selectMoviesError, selectPopularMovies } from '../../store/movies/movie.selector';
import { selectAllTVShows, selectPopularTVShows } from '../../store/tv-shows/tv-show.selector';
import { of } from 'rxjs';
import { TVShow } from '../../store/tv-shows/tv-show.model';
import { Movie } from '../../store/movies/movie.model';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let store: MockStore;
  let popupService: jest.Mocked<PopupService>;

  const initialState = {
    movies: { entities: [], loading: false, error: null },
    tvShows: { entities: [], loading: false, error: null }
  };

  beforeEach(async () => {
    const popupServiceSpy = {
      closePopup: jest.fn(),
      popupData$: of({ visible: true, query: 'test query' })
    };

    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [
        provideMockStore({ initialState }),
        { provide: PopupService, useValue: popupServiceSpy },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    popupService = TestBed.inject(PopupService) as jest.Mocked<PopupService>;

    store.overrideSelector(selectAllMovies, []);
    store.overrideSelector(selectMoviesError, null);
    store.overrideSelector(selectAllTVShows, []);
    store.overrideSelector(selectPopularMovies, []);
    store.overrideSelector(selectPopularTVShows, []);

    fixture.detectChanges();
  });

  it('should create the HomeComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch movie and tv show actions on initialization', () => {
    const dispatchSpy = jest.spyOn(store, 'dispatch');

    component.ngOnInit();
    
    expect(dispatchSpy).toHaveBeenCalledWith(MovieActions.getMovie({ page: 1 }));
    expect(dispatchSpy).toHaveBeenCalledWith(TVShowActions.getTVShow({ page: 1 }));
    expect(dispatchSpy).toHaveBeenCalledWith(MovieActions.getPopularMovie({ page: 1 }));
    expect(dispatchSpy).toHaveBeenCalledWith(TVShowActions.getPopularTVShow({ page: 1 }));
  });

  it('should set movies$, error$, tvshows$, popularMovies$, and popularTVShows$ from selectors', (done) => {
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

    const testError: string | null = 'Error message';

    const testTVShows: TVShow[] = [{
      id: 1,
      title: 'Test TV Show',
      overview: 'Overview of Test TV Show',
      release_date: '2024-01-01',
      vote_average: 9.0,
      vote_count: 200,
      poster_path: '/path/to/tvshow/poster.jpg',
      backdrop_path: '/path/to/tvshow/backdrop.jpg',
      genre_ids: [1, 2],
      popularity: 20,
      adult: false,
      original_language: 'en',
      original_title: 'Original TV Show Title',
      video: false,
    }];

    const testPopularMovies: Movie[] = [{
      id: 2,
      title: 'Popular Movie',
      overview: 'Overview of Popular Movie',
      release_date: '2024-01-01',
      vote_average: 7.5,
      vote_count: 150,
      poster_path: '/path/to/popular/movie/poster.jpg',
      backdrop_path: '/path/to/popular/movie/backdrop.jpg',
      genre_ids: [3],
      popularity: 30,
      adult: false,
      original_language: 'en',
      original_title: 'Original Popular Title',
      video: false,
    }];

    const testPopularTVShows: TVShow[] = [{
      id: 2,
      title: 'Popular TV Show',
      overview: 'Overview of Popular TV Show',
      release_date: '2024-01-01',
      vote_average: 9.5,
      vote_count: 300,
      poster_path: '/path/to/popular/tvshow/poster.jpg',
      backdrop_path: '/path/to/popular/tvshow/backdrop.jpg',
      genre_ids: [1, 4],
      popularity: 40,
      adult: false,
      original_language: 'en',
      original_title: 'Original Popular TV Show Title',
      video: false,
    }];

    store.overrideSelector(selectAllMovies, testMovies);
    store.overrideSelector(selectMoviesError, testError);
    store.overrideSelector(selectAllTVShows, testTVShows);
    store.overrideSelector(selectPopularMovies, testPopularMovies);
    store.overrideSelector(selectPopularTVShows, testPopularTVShows);

    fixture.detectChanges();

    component["movies$"].subscribe(movies => {
      expect(movies).toEqual(testMovies);
    });
    component["error$"].subscribe(error => {
      expect(error).toEqual(testError);
    });
    component["tvshows$"].subscribe(tvShows => {
      expect(tvShows).toEqual(testTVShows);
    });
    component["popularMovies$"].subscribe(popularMovies => {
      expect(popularMovies).toEqual(testPopularMovies);
    });
    component["popularTVShows$"].subscribe(popularTVShows => {
      expect(popularTVShows).toEqual(testPopularTVShows);
      done();
    });
  });

  it('should handle load next page by dispatching the correct action', () => {
    const dispatchSpy = jest.spyOn(store, 'dispatch');

    component["handleLoadNextPage"]({ collectionName: 'Movies', page: 2 });
    expect(dispatchSpy).toHaveBeenCalledWith(MovieActions.getMovie({ page: 2 }));

    component["handleLoadNextPage"]({ collectionName: 'TV-shows', page: 3 });
    expect(dispatchSpy).toHaveBeenCalledWith(TVShowActions.getTVShow({ page: 3 }));

    component["handleLoadNextPage"]({ collectionName: 'Popular movies', page: 4 });
    expect(dispatchSpy).toHaveBeenCalledWith(MovieActions.getPopularMovie({ page: 4 }));

    component["handleLoadNextPage"]({ collectionName: 'Popular TV-shows', page: 5 });
    expect(dispatchSpy).toHaveBeenCalledWith(TVShowActions.getPopularTVShow({ page: 5 }));
  });

  it('should call closePopup in popupService when closePopup method is triggered', () => {
    component.closePopup();
    expect(popupService.closePopup).toHaveBeenCalled();
  });

  it('should receive popupData$ from PopupService', (done) => {
    component["popupData$"].subscribe(data => {
      expect(data).toEqual({ visible: true, query: 'test query' });
      done();
    });
  });
});
