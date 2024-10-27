import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MovieService } from './movie.service';
import { Movie } from '../store/movies/movie.model';
import { baseUrl, headers } from '../config/config';

describe('MovieService', () => {
  let service: MovieService;
  let httpMock: HttpTestingController;

  const mockMovies: Movie[] = [
    {
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
    },
  ];

  const mockResponse = {
    page: 1,
    results: mockMovies,
    total_pages: 10,
    total_results: 100,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MovieService, { provide: 'headers', useValue: headers }  ],
    });

    service = TestBed.inject(MovieService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should perform a GET request to fetch Movies', () => {
    const mockResponse = {
      page: 1,
      results: [{ id: 3, title: 'Movie 1', overview: 'Overview of popular show 1', release_date: '2023-03-01',
        vote_average: 9, vote_count: 200, poster_path: '/popular1.jpg', backdrop_path: '/popularbackdrop1.jpg', 
        genre_ids: [3], popularity: 30, adult: false, original_language: 'en', original_title: 'Original Popular Show 1', video: false }],
      total_pages: 1,
      total_results: 1
    };

    const page = 1;

    service.getMovies(page).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`${baseUrl}/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse); 
  });

  it('should perform a GET request to fetch popular Movies', () => {
    const mockResponse = {
      page: 1,
      results: [{ id: 2, title: 'Movie 1', overview: 'Overview of popular show 1', release_date: '2023-03-01',
        vote_average: 9, vote_count: 200, poster_path: '/popular1.jpg', backdrop_path: '/popularbackdrop1.jpg', 
        genre_ids: [3], popularity: 30, adult: false, original_language: 'en', original_title: 'Original Popular Show 1', video: false }],
      total_pages: 1,
      total_results: 1
    };

    const page = 1;

    service.getPopularMovies(page).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`${baseUrl}/movie/popular?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse); 
  });



});
