import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Search } from '../store/search/search.model';
import { baseUrl, headers } from '../config/config';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private apiSearch = 'search/collection';

  constructor(private http: HttpClient) {}

  private headersAPI = new HttpHeaders(headers)

  getSearch(query: string, page: number): Observable<{page: number, results: Search[],total_pages: number, total_results: number}> {
     return this.http.get<{page: number, results: Search[],total_pages: number, total_results: number}>(
      `${baseUrl}/${this.apiSearch}`,
      {
        headers: this.headersAPI,
        params: {
            "query": query,
          "include_adult": false,
          'language': "en-US",
          'page': page,
        }
      }
    );
  }

}
