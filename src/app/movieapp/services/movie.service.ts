import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { Movie } from '../store/movies/movie.model';
import { baseUrl, headers } from '../config/config';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiAllMovies = 'discover/movie'; 
  private apiPopularMovies = 'movie/popular';

  constructor(private http: HttpClient) {}

  private headersAPI = new HttpHeaders(headers)

  public getMovies(page: number): Observable<{page: number, results: Movie[],total_pages: number, total_results: number}> {
     return this.http.get<{page: number, results: Movie[],total_pages: number, total_results: number}>(
      `${baseUrl}/${this.apiAllMovies}`,
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

  public getPopularMovies(page: number): Observable<{page: number, results: Movie[],total_pages: number, total_results: number}> {
    return this.http.get<{page: number, results: Movie[],total_pages: number, total_results: number}>(
     `${baseUrl}/${this.apiPopularMovies}`,
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
