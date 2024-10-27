import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SearchService } from './search.service';
import { Search } from '../store/search/search.model';
import { baseUrl, headers } from '../config/config';

describe('SearchService', () => {
  let service: SearchService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        SearchService,
        { provide: 'headers', useValue: headers }  
      ]
    });
    service = TestBed.inject(SearchService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); 
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should perform a GET request to fetch search results', () => {
    const mockResponse:{ page: number; results: Search[]; total_pages: number; total_results: number; } = {
      page: 1,
      results: [{ id: 3, name: 'Popular Show 1', overview: 'Overview of popular show 1',
        poster_path: '/popular1.jpg', backdrop_path: '/popularbackdrop1.jpg', 
         adult: false, original_language: 'en', original_name: 'Original Popular Show 1', }],
      total_pages: 1,
      total_results: 1
    };

    const query = 'test';
    const page = 1;

    service.getSearch(query, page).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`${baseUrl}/search/collection?query=${query}&include_adult=false&language=en-US&page=${page}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse); 
  });

});
