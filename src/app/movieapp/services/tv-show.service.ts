import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { TVShow } from '../store/tv-shows/tv-show.model';
import { headers,baseUrl } from '../config/config';

@Injectable({
  providedIn: 'root',
})
export class TVShowService {
  private apiTVSHow = 'discover/tv'; 
  private apiPopularTVShow = 'movie/popular';

  private headersAPI = new HttpHeaders(headers)

  constructor(private http: HttpClient) {}

  getTVShow(page: number): Observable<{page: number, results: TVShow[],total_pages: number, total_results: number}> {
     return this.http.get<{page: number, results: TVShow[],total_pages: number, total_results: number}>(
      `${baseUrl}/${this.apiTVSHow}`,
      {
        headers: this.headersAPI,
        params: {
          "include_adult": false,
          'include_video': false,
          'language': "en-US",
          'page': page,
          'sort_by': "popularity.desc"
        }
      }
    );
  }

  public getPopularTVShow(page: number): Observable<{page: number, results: TVShow[],total_pages: number, total_results: number}> {
    return this.http.get<{page: number, results: TVShow[],total_pages: number, total_results: number}>(
     `${baseUrl}/${this.apiPopularTVShow}`,
     {
       headers: this.headersAPI,
       params: {
         "include_adult": false,
         'include_video': false,
         'language': "en-US",
         'page': page,
         'sort_by': "popularity.desc"
       }
     }
   );
 }

}
