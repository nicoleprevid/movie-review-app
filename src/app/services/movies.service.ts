// /app/modules/movies/services/movie-api.service.ts

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
  private apiUrl = 'http://www.omdbapi.com/'; // URL base da API OMDb
  private apiKey = environment.moviesApi.apiKey; // Substitua com sua chave de API OMDb

  constructor(private http: HttpClient) { }

  searchMoviesByTitle(title: string): Observable<any> {
    // Parâmetros da requisição
    let params = new HttpParams();
    params = params.append('apikey', this.apiKey);
    params = params.append('s', title);

    // Faz a requisição GET para buscar filmes por título
    return this.http.get<any>(this.apiUrl, { params }).pipe(
      map(response => response.Search || []) // Mapeia para obter apenas o array de resultados 'Search'
    );
  }

  getMovieDetailsById(id: string): Observable<any> {
    // Parâmetros da requisição
    let params = new HttpParams();
    params = params.append('apikey', this.apiKey);
    params = params.append('i', id);

    // Faz a requisição GET para obter detalhes de um filme por ID
    return this.http.get<any>(this.apiUrl, { params });
  }

  getDefault(): Observable<any> {
    // Parâmetros da requisição
    let params = new HttpParams();
    params = params.append('apikey', this.apiKey);
    params = params.append('i', 'tt3896198');

    // Faz a requisição GET para obter detalhes de um filme por ID
    return this.http.get<any>(this.apiUrl, { params });
  }
  
  listFirstTenMovies(): Observable<Movie[]> {
    let params = new HttpParams()
      .set('apikey', this.apiKey)
      .set('s', 'girl') // Adicione um termo de pesquisa
      .set('type', 'movie')
      .set('page', '1')
      .set('r', 'json')
      .set('plot', 'full');

    return this.http.get<any>(this.apiUrl, { params }).pipe(
      map(response => {
        if (response && response.Search) {
          return response.Search.slice(0, 10); // Retorna apenas os 10 primeiros filmes da resposta
        } else {
          console.log("response.Search não existe");
          return [];
        }
      }),
      catchError(error => {
        console.log("Erro na requisição:", error);
        return of([]); // Retorna um array vazio em caso de erro
      })
    );
  }
}
