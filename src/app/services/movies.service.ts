import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Movie } from '../components/movie-card/movie.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieAPIService {
  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = environment.moviesApi.apiKey; // Chave de API do TMDb

  constructor(private http: HttpClient) { }

  searchMoviesByTitle(title: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('api_key', this.apiKey);
    params = params.append('query', title);

    return this.http.get<any>(`${this.apiUrl}/search/movie`, { params }).pipe(
      map(response => response.results || [])
    );
  }

  getMovieDetailsById(id: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('api_key', this.apiKey);

    return this.http.get<any>(`${this.apiUrl}/movie/${id}`, { params });
  }

  listFirstTenMovies(): Observable<Movie[]> {
    let params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('page', '1');

    return this.http.get<any>(`${this.apiUrl}/movie/popular`, { params }).pipe(
      map(response => {
        if (response && response.results) {
          return response.results.slice(0, 10);
        } else {
          console.log("response.results não existe");
          return [];
        }
      }),
      catchError(error => {
        console.log("Erro na requisição:", error);
        return of([]);
      })
    );
  }
   // Pesquisa filmes com base em filtros
   searchMoviesByFilters(filter: any): Observable<Movie[]> {
    let params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('with_genres', filter.with_genres)
      .set('page', '1');

    return this.http.get<any>(`${this.apiUrl}/discover/movie`, { params }).pipe(
      map(response => {
        if (response && response.results) {
          return response.results;
        } else {
          console.log("response.results não existe");
          return [];
        }
      }),
      catchError(error => {
        console.log("Erro na requisição:", error);
        return of([]);
      })
    );
  }


  
}
