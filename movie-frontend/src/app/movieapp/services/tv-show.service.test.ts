import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TVShowService } from './tv-show.service';
import { TVShow } from '../store/tv-shows/tv-show.model';
import { baseUrl, headers } from '../config/config';

describe('TVShowService', () => {
  let service: TVShowService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TVShowService,  { provide: 'headers', useValue: headers }  ],
    });
    service = TestBed.inject(TVShowService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); 
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should perform a GET request to fetch TV shows', () => {
    const mockResponse = {
      page: 1,
      results: [{ id: 3, title: 'Popular Show 1', overview: 'Overview of popular show 1', release_date: '2023-03-01',
        vote_average: 9, vote_count: 200, poster_path: '/popular1.jpg', backdrop_path: '/popularbackdrop1.jpg', 
        genre_ids: [3], popularity: 30, adult: false, original_language: 'en', original_title: 'Original Popular Show 1', video: false }],
      total_pages: 1,
      total_results: 1
    };

    const page = 1;

    service.getTVShow(page).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`${baseUrl}/discover/tv?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse); 
  });

  it('should perform a GET request to fetch popular TV shows', () => {
    const mockResponse = {
      page: 1,
      results: [{ id: 2, title: 'Popular Show 1', overview: 'Overview of popular show 1', release_date: '2023-03-01',
        vote_average: 9, vote_count: 200, poster_path: '/popular1.jpg', backdrop_path: '/popularbackdrop1.jpg', 
        genre_ids: [3], popularity: 30, adult: false, original_language: 'en', original_title: 'Original Popular Show 1', video: false }],
      total_pages: 1,
      total_results: 1
    };

    const page = 1;

    service.getPopularTVShow(page).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`${baseUrl}/tv/popular?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse); 
  });

  
});
